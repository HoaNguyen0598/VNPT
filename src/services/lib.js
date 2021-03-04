import { getLocalStore, showNotification, translate } from '../functions/Utils.js';
var pako = require('pako');

const CONTENT_TYPE = 'application/json; charset=utf-8';
const CONTENT_MULITPART = 'multipart/form-data';
const MNV_ENCODE = 0;
const MNV_LANGUAGE = getLanguageCodeFromLocalStore();

function getLanguageCodeFromLocalStore() {
    let langCode = getLocalStore('language');
    if (langCode === 'zh') {
        return 'zh-hans'
    }
    return langCode;
}

function Encode(data) {
    var text = JSON.stringify(data);
    var buff = new TextEncoder("utf-8").encode(text);
    var compressed = pako.deflate(buff);
    return compressed;
}

function Decode(base64Data) {
    var decompressed = pako.inflate(base64Data);
    // var code = String.fromCharCode.apply(null, decompressed)
    var code = handleCodePoints(decompressed)
    var text = decodeURIComponent(escape(code))
    var data = JSON.parse(text);
    return data;
}

function handleCodePoints(array) {
    var CHUNK_SIZE = 0x8000; // arbitrary number here, not too small, not too big
    var index = 0;
    var length = array.length;
    var result = '';
    var slice;
    while (index < length) {
        slice = array.slice(index, Math.min(index + CHUNK_SIZE, length)); // `Math.min` is not really necessary here I think
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
    }
    return result;
}

function getUrl(url, data = {}) {

    // console.log('url:',url);

    var strUrl = url;
    var first = true;
    for (var key in data) {
        if (data[key] !== undefined &&
            data[key] !== '' && data[key] !== null
        ) {
            strUrl = strUrl + (first ? '?' : '&') + (key + '=' + data[key]);
            first = false;
        }
    }
    // console.log('strUrl', strUrl);
    return strUrl;
}


function getHeader(token, content_type = CONTENT_TYPE, auth_type = 'Bearer') {
    let headers;
    if (token) {
        headers = {
            'Authorization': auth_type + ' ' + token,
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    } else {
        headers = {
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    }

    // console.log('headers request: ',headers);

    if (content_type && content_type !== '') {
        headers['Content-Type'] = content_type
    }
    return headers;
}


function authHeader() {
    // return authorization header with basic auth credentials
    let user = getLocalStore('language');
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}

function handleRequest(url, options) {
    options['url'] = url;

    if (options.hasOwnProperty("body")) {
        if (MNV_ENCODE === 1) {
            options['body'] = Encode(options['body']);
        }
        else {
            options['body'] = JSON.stringify(options['body'])
        }
    }

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleRequestBinary(url, options) {
    options['url'] = url;

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleResponseBuffer(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        if (response.status > 500 || response.status === 500) {
            showNotification({
                type: 'error',
                message: translate('error_server_message'),
                title: 'Error' + ' ' + response.status
            })
        } else {
            showNotification({
                type: 'error',
                message: response.statusText,
                title: response.status
            })
        }
        return (Promise.reject(content));
    }
    return response.arrayBuffer().then(buffer => {
        return handleData(response, Decode(buffer));
    });
}

function handleResponseText(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        if (response.status > 500 || response.status === 500) {
            showNotification({
                type: 'error',
                message: translate('error_server_message'),
                title: 'Error' + ' ' + response.status
            })
        } else {
            showNotification({
                type: 'error',
                message: response.statusText,
                title: response.status
            })
        }
        return (Promise.reject(content));
    }
    return response.json().then(data => {
        return handleData(response, data);
    });
}

function handleData(response, data) {
    if (data['success'] === false) {
        const error = data;
        console.log(error);
        return Promise.reject(error);
    }
    return data;
}

/**
 * update or create using form-data
 * @object {*} data: data from params
 * @string {*} token 
 */
function postWithFormData(data, token, url, onProgress) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", url);
        onProgress && request.upload.addEventListener("progress", onProgress);
        request.setRequestHeader('MNV-ENCODE', MNV_ENCODE)
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.send(data);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                try {
                    let response = JSON.parse(request.responseText)
                    if (response['success'] === false) {
                        const error = response;
                        console.log('error connect to api', error)
                        return reject(error);
                    }
                    return resolve(response)
                }
                catch (error) {
                    console.log('error connect to api', error)
                    return reject(error.message);
                }
            }
        }
    });
}

export {
    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,
    postWithFormData,

    CONTENT_TYPE
}
