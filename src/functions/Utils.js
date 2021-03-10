import React from 'react';
import { Trans } from 'react-i18next';
import * as moment from 'moment';
import "moment/locale/vi"
import "moment/locale/en-au"
import "moment/locale/zh-cn"
import vi_VN from "antd/es/date-picker/locale/vi_VN";
import en_US from "antd/es/date-picker/locale/en_US"
import zh_CN from "antd/es/date-picker/locale/zh_CN"
import { notification } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import avatarDefault from '../../public/images/avt.png';

const DATEFORMAT = {
    DDMMYY_HHMM: "dd/MM/yyyy HH:mm",
    DDMMYY_HHMM_NEW: "dd/MM/yyyy '-' HH:mm",
    DDMMYY_HHMMSS: "dd/MM/yyyy HH:mm:ss",
    YYMMDD_HHMM: "yyyy/MM/dd HH:mm",
    HHMM_DDMMYY: "HH:mm dd/MM/yyyy",
    YYMMDD: "yyyy/MM/dd",
    DDMMYYYY: "dd/MM/yyyy",
    DDMM: "dd/MM",
    DATETIME_API: "dd/MM/yyyy HH:mm:ss",
    TIME_API: "HH:mm:ss",
    HHMM: "HH:mm",
    HHMMAA: "hh:mm aa",
    HHMMAA_24: "HH:mm aa",
    MMSS: "mm:ss",
    YYMMDD_HHMM_AA: "dd/MM/yyyy hh:mm aa",
    YYMMDD_HHMMSS: "yyyy/MM/dd HH:mm:ss",
    YY_MM_DD_HHMMSS: "yyyy-MM-dd HH:mm:ss",
    DATE_TIME_API_WAITER: "yyyy/MM/dd HH:mm:ss",
    DDMMYY: "dd/MM/yy",
    YYYY_MM_DD: "yyyy-MM-dd",
    DD_MM_YYYY: "dd-MM-yyyy",
    DDD_DD_MM: "EEEE dd/MM",
    TIMESTAMP_API: "yyyy-MM-dd'T'HH:mm:ss",
    TIMESTAMP_API3: "yyyy-MM-dd'T'HH:mm:ss.SSS",
    TIMESTAMP_API6: "yyyy-MM-dd'T'HH:mm:ss.SSSSSS"
}

export function mapModifiers(baseClassName, ...modifiers) {
    return modifiers
        .reduce((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
        .map(m => `-${m}`)
        .reduce((classNames, suffix) => (classNames += ` ${baseClassName}${suffix}`), baseClassName);
}

export const isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
}

/**
 * format datetime YYYY/MM/DD to DD/MM/YYYY
 * @param {string} date
 */
export const convertDateShow = (date) => {
    try {
        return moment(date, 'YYYY/MM/DD').format('DD/MM/YYYY')
    } catch (e) {
        return date
    }
}

export const convertDateDDMMYYYY = (date) => {
    try {
        return moment(date, "YYYY-MM-DD").format('DD/MM/YYYY')
    } catch (e) {
        return date
    }
}

export const convertDateYYYYMMDD = (date) => {
    try {
        return moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD')
    } catch (e) {
        return date
    }
}

export const convertDateHHmm = (date) => {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format('HH:mm')
    } catch (e) {
        return date
    }
}

/**
 * Convert to DD/MM/YYYY - HH:mm
 * @param {string} date 
 */
export const convertDateHHmmToDDMMYYHHMM = (date) => {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format('DD/MM/YYYY - HH:mm')
    } catch (e) {
        return date
    }
}

/**
 * convert string 'DD/MM/YYYY' to Moment()
 * @param {string 'DD/MM/YYYY'} date 
 */

export const convertDDMMYYYYToMoment = (date) => {
    return moment(date, 'DD-MM-YYYY')
}

export const checkBeforeTime = (date) => {
    try {
        return moment().isBefore(date)
    } catch (e) {
        return false
    }
}

export const getTextDefault = (value) => {
    if (value) {
        return value
    }
    return '-'
}

//Copy list to new list
export const copyList = (list) => {
    var result = []
    if (list) {
        for (var i = 0; i < list.length; i++) {
            var model = {}
            var data = list[i]
            for (var key in data) {
                model[key] = data[key]
            }
            result.push(model)
        }
    }
    return result
}

// Load data pagination
export const LoadDataPaging = (total_record, page, total_page, limit) => {
    var list = {
        total_record: total_record,
        page: page,
        total_page: total_page,
        limit: limit,
    }
    if (total_record === undefined || page === undefined || total_page === undefined || limit === undefined) {
        return null;
    } else if (total_record < 0 || page < 0 || total_page < 0 || limit < 0) {
        return null;
    } else { return list; }
}

//Kiểm tra khác nhau giữa 2 list, và key đặt biệt để kiểm tra nếu list đầu tiên đã có thì sẽ là khác (dùng cho Add)
export const differentList = (firstList, nextList, keyDifferentInFirst) => {
    if (firstList.length == nextList.length) {
        for (var i = 0; i < firstList.length; i++) {
            var data = firstList[i]
            var model = nextList[i]
            for (var key in data) {
                if (key === keyDifferentInFirst) {
                    return true
                }
                if (model[key] !== data[key]) {
                    return true
                }
            }
        }
        return false
    }
    return true
}

//Delete model in list with key and value
export const deleteModelInList = (list, key, value) => {
    if (!list) return null
    return list.filter(model => model[key] != value)
}

export const convertListToArrayId = (list, keyId) => {
    var result = []
    if (list) {
        for (var i = 0; i < list.length; i++) {
            result.push(list[i][keyId])
        }
    }
    return result
}

//Sort layout
export const sortlayout = (item, datas, currentList) => {
    let myData = [].concat(datas)
    let model = currentList.find(tab => tab.label === item.label)
    if (item.sort) {
        if (model.sort === "ascending") {
            model.sort = "descending";
        } else {
            model.sort = "ascending";
        }
    } else {
        currentList.forEach(tab => tab.sort = "")
        model.sort = "ascending";
    }
    let keySort = "";
    if (model.label) {
        keySort = model.keySort
    }
    if (model.sort == "ascending") {
        myData.sort((a, b) => a[keySort] < b[keySort] ? 1 : -1)
    } else if (model.sort == "descending") {
        myData.sort((a, b) => a[keySort] > b[keySort] ? 1 : -1)
    }
    return myData
}

export const getNumberPercentRounding = (number) => {
    if (!number) {
        return 0
    }
    var value = number % 10
    var count = value >= 5 ? 10 : 0
    return number - value + count
}

export const convertAcreagetoInt = (number) => {
    let isStart = -1;
    let isEnd = -2;
    let num = number;
    let N = /\D/gi;
    if (typeof number == "string") {
        for (let i = 0; i < number.length; i++) {
            if (N.test(number[i]) === false && isStart === -1) {
                isStart = i;
            }
            if (N.test(number[i]) === true && isStart !== -1 && number[i] !== ".") {
                isEnd = i;
                break
            }
        }
        num = number.slice(isStart, isEnd)
    }
    return num
}

export const formatCurrency = (number) => {
    if (number !== null && number !== undefined) {
        var n = null;
        if (Number.isInteger(number)) {
            n = JSON.stringify(number).split('').reverse().join("");
        }
        else {
            n = number.split(' ').reverse().join("");
        }
        var n2 = n.replace(/\d\d\d(?!$)/g, "$&.");
        return n2.split('').reverse().join('') + ",00 ";
    } else {
        return 0;

    }
}
export const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    let str = b64Data.replace(/^data:image\/[a-z]+;base64,/, "");
    let byteCharacters = atob(str);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, { type: contentType });
    return URL.createObjectURL(blob);
}
export const formatCurrencyNotComma = (number) => {
    if (number !== null && number !== undefined) {
        var n = null;
        if (Number.isInteger(number)) {
            n = JSON.stringify(number).split('').reverse().join("");
        }
        else {
            n = number.split(' ').reverse().join("");
        }
        var n2 = n.replace(/\d\d\d(?!$)/g, "$&.");
        return n2.split('').reverse().join('');
    } else {
        return 0;
    }
}

export const formatDate = (date, type = "DD/MM/YYYY") => {
    if (date) {
        return moment(moment(date)).format(type)
    }
    return null
}

export const getLocalStore = (text, remove = false) => {
    let data = localStorage.getItem(text);
    if (data) {
        if (remove) { localStorage.removeItem(text) }
        return JSON.parse(data);
    }
    return false
}

export const translate = (text, trans = false) => {
    if (trans) {
        return trans(text)
    }
    else {
        return <Trans>{text}</Trans>
    }
}

export const scrubFilename = (filename) => filename.replace(/[^\w\d_\-. ]+/ig, '')

export const convertUnsignedString = (s) => {
    let str = s;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

export const validatoInputCurrency = (value) => {
    let format = /[a-zA-z !@#$%^&*()_+\-=\[\]{};':,"\\|<>\/?]/;
    return typeof value == "string" ? format.test(convertUnsignedString(value)) == false : true
}

export const validateErrorNumber = (value) => {
    if (value == "") {
        return 0
    }
    else
        if (value.search(",00") !== -1) {
            return value.replace(",00", "");
        }

    return value
}

export const convertStringToFloat = (value, num = 2, noparse = false) => {
    let text = value;
    if (typeof text == "string") {
        if (text.indexOf(0) == 0) {
            text = text.slice(1, text.length)
        }
        if (text.indexOf(",") != -1 && text.indexOf(",") > num) {

            text = text.slice(0, (text.indexOf(",") + num + 1))
        }
        let number = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] == ",") {
                number = number + "."
            } else if (text[i] != ".") {
                number = number + text[i]
            }
        }
        return number == "" ? "" : noparse ? number : parseFloat(number)
    } else {
        return text ? parseFloat(text) : 0
    }
}
/**
 * Dùng với input currency, chưa test khi sử dụng chỗ khác
 * Dùng formatCurrency1 thay thế 
 */
export const convertFloatToString = (value, defaule = " -") => {
    if (value) {
        let newText = ""
        let text = value;
        let _add = 0;
        let isExit = true;
        if (typeof value == "string") {
            text = value.split('').reverse().join("");
        } else {
            text = JSON.stringify(value).split('').reverse().join("");
        }
        if (text.indexOf(".") != -1) {
            isExit = false;
        }
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ".") {
                newText = newText + ","
                _add = 0;
                isExit = true
            } else if ((_add + 1) % 3 == 0) {
                if (i <= text.length - 2 && isExit) {
                    if (text[i] >= 0 && text[i + 1] !== "-") {
                        newText = newText + text[i] + ".";
                        _add = 0
                    } else {
                        newText = newText + text[i]
                    }
                } else {
                    newText = newText + text[i]
                }
            } else {
                _add = _add + 1
                newText = newText + text[i]
            }
        }
        return newText.split('').reverse().join('')
    }
    return defaule;
}


export const converAddress = (address = []) => {
    let _city = "";
    let _district = "";
    let _ward = "";
    let _address
    let index = 0;
    let isStart = address.length;
    for (let i = address.length; i > 0; i--) {
        if (address[i] == ",") {

            if (index === 2) {
                _ward = address.slice(i + 1, isStart);
                _address = address.slice(0, i);
                break
            }
            if (index === 1) {
                _district = address.slice(i + 1, isStart);
                index = 2;
                isStart = i;
            }
            if (index === 0) {
                _city = address.slice(i + 1, isStart);
                index = 1;
                isStart = i;
            }
        }
    }
    return { _city, _district, _ward, _address }
}

export const expandType = (width, length) => {
    if (width || length) {
        return ` ${width ? width : '-'} x ${length ? length : '-'} `
    }
    return "0"
};
//cut text bang " ", mac dinh la 6
export const trimContent = (value, num = 6) => {
    let text = value;
    let isExit = 0;
    if (typeof text == "string") {
        text = text.trim()
        for (let i = 0; i < text.length; i++) {
            if (text[i] == " ") {
                if (isExit == num) {
                    return text.slice(0, i) + "..."
                }
                else {
                    isExit++
                }
            }
        }
        return text
    }
    return text
}

export const datePichkerLocation = () => {
    let language = getLocalStore("language")
    switch (language) {
        case "vi":
            return vi_VN;
        case "en":
            return en_US
        case "zh":
            return zh_CN
    }
}

export const renderDayAgo = (date, text = "day") => {
    let time = moment().unix() - moment(date).unix()
    let language = getLocalStore("language")
    if (time > 172800) {
        return formatDate(moment(date))
    }
    else {
        return moment(date).locale(language).startOf(text).fromNow()
    }
}

export const createDataSelect = (value, label, options) => {
    return { value, label, options }
};

export const capitalizeText = (text) => {
    let result = text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase()
    return result;
}

const token = () => {
    if (getLocalStore('user')) {
        let token = getLocalStore('user').token;
        if (token) { return token }
    }
    return null
}; // Production
export const TOKEN = token()

export const showNotification = (data) => {
    const { type, message, title } = data
    const setIcon = () => {
        if (type === 'success') {
            return <CheckOutlined />
        }
        else if (type === 'error') {
            return <CloseOutlined />
        }
    }
    const getStyle = () => {
        if (type === 'success') {
            return {
                color: '#fff',
                backgroundColor: '#6d30ab',
                fontSize: '18px'
            }
        }
        else if (type === 'error') {
            return {
                color: '#fff',
                backgroundColor: 'red',
                fontSize: '18px'
            }
        }
        else if (type === 'warning') {
            return {
                color: '#FFFF66',
                backgroundColor: '#f2f1c3',
                fontSize: '18px'
            }
        }
    }
    notification[type ? type : 'success']({
        message: title,
        description: message,
        // // placement: "BottomRight",
        icon: setIcon(),
        style: getStyle()
    });
}

/**
 * get Breadcrumb data from url path
 convert '/a/b' string to a array contain urls: ['/a', '/a/b']
 */
export const getBreadcrumbData = (pathRoute, routes, pathUrl) => {
    const paramsObject = convertUrlToParamObject(pathUrl, pathRoute);
    const paths = pathRoute.split('/');
    let newPaths = [];
    let newPath = '';

    if (pathRoute !== '/') {
        for (let i = 1; i < paths.length; i++) {
            newPath = newPath + '/' + paths[i];
            const foundPath = routes.filter(item => item.path === newPath);
            if (foundPath.length > 0) {
                newPaths.push({ path: newPath, title: foundPath[0].title });
            }
        }
    }

    let resPaths = [];
    for (let i = 0; i < newPaths.length; i++) {
        let path = newPaths[i].path;
        let title = newPaths[i].title;
        for (const key in paramsObject) {
            path = path.replace(key, paramsObject[key])
        }
        let temp = {
            path,
            title,
        }
        resPaths.push(temp)
    }

    // Chỉ cho phép hiển thị 3 link bao gồm Home page
    if (resPaths.length > 2) {
        resPaths = resPaths.splice(resPaths.length - 2, resPaths.length);
    }

    resPaths.unshift({ path: '/dashboard', title: 'Home' });
    // console.log('resPaths', resPaths);
    return resPaths;
}

/**
 * 
 * @param {string} url : path url 
 * @param {string} routeUrl : path route url
 */
export const convertUrlToParamObject = (url, routeUrl) => {
    const urlArr = url.split('/');
    const routeUrlArr = routeUrl.split('/');
    let res = {};
    for (let i = 0; i < urlArr.length; i++) {
        if (routeUrlArr[i].includes(':')) {
            res[routeUrlArr[i]] = urlArr[i];
        }
    }
    // console.log(res)
    return res;
}

/**
 * convert list Credit Ceiling
 */
export const getListCreditCeiling = (data) => {
    if (data) {
        const arr = []
        for (let key in data) {
            let item = {
                id: key,
                value: key,
                label: data[key]
            }
            arr.push(item)
        }
        return arr
    }
}
/**
 * convert data number to percent (%) for chart donut
 */
export const changeNumberToPercent = (data) => {
    if (data && data.length > 0) {
        let arr = [];
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total = total + data[i]
        }
        for (let i = 0; i < data.length; i++) {
            let item = parseFloat((data[i] / total * 100).toFixed(0))
            arr.push(item)
        }
        return arr;
    }
}

/**
 * format number 000000.00 to 000.000,00
 * @param {*} number 
 */
export const formatCurrency1 = (number, unit) => {
    let strNumber = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
    let res = strNumber.replace('€', '');
    res = res.replace(/ /, '');
    res = res.replace(',00', '');
    if (unit) {
        return `${res} ${unit}`
    }
    return res;
};

export const validateInput = (value, metadata_id) => {
    //console.log("metadata_id: ", metadata_id, " value: ", value)
    if (value === "") {
        return translate('warning_empty_value');
    } else if (converStringToFloat(value) < 0) {
        return translate('warning_invalid_value');
    }
}

/**
 *Convert currency format '000.000,00' to float number format '000000.00'
 * return: textNumber (string)
 **/
export function converToFloat(value) {
    let text = value;
    if (typeof text == "string") {
        if (isNaN(Number(text))) {
            let textArr = text.split(',');
            let subText0 = textArr[0];
            let subText1 = textArr[1];
            subText0 = subText0.replace(/\./g, '');
            let number = subText0;
            let fixed = 0;
            if (!isNaN(Number(subText1))) {
                number = subText0 + '.' + subText1;
                fixed = subText1.length;
            }
            let textNumber = parseFloat(parseFloat(number).toFixed(fixed)); //string
            if (!isNaN(textNumber)) {
                return textNumber
            } else {
                return 0
            }
        } else {
            const number = text.replace(/\./g, '');
            if (!isNaN(parseFloat(number))) {
                return parseFloat(number)
            } else {
                return 0
            }
        }
    } else {
        return text
    }
}

/**
 * Check File is Blob file
 */

export function isBlobFile(file) {
    if ('Blob' in window && file instanceof Blob)
        return true;
    else return false;
}

/**
 * Check is empty object
 */

export function isEmptyObj(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/**
 * Remove invalid value from object
 * @param {*} obj object input
 */
export function removeEmptyFromObj(obj) {
    return Object.entries(obj).reduce((a, [k, v]) => ((!v || v == null) ? a : (a[k] = v, a)), {})
}


/**
 * 
 * @param {*} paramsObj : search params object
 */
export function makeSearchParams(paramsObj = {}) {
    if (isEmptyObj(paramsObj)) {
        return '';
    }
    var strParams = '';
    var first = true;
    for (var key in paramsObj) {
        if (paramsObj[key] !== undefined &&
            paramsObj[key] !== '' && paramsObj[key] !== null
        ) {
            strParams = strParams + (first ? '?' : '&') + (key + '=' + paramsObj[key]);
            first = false;
        }
    }
    return strParams;
}

/**
 * Add class vị trí, màu sắc của marker trong map
 * @param map_flag_type: cờ từ api tương ứng với class của marker
 */
export const getFlagMarkerClass = (map_flag_type) => {
    switch (map_flag_type) {
        case 1:
            return 'middle-left';
        case 2:
            return 'middle-right';
        case 3:
            return 'top-left';
        case 4:
            return 'top-right';
        case 5:
            return 'bottom-left';
        case 6:
            return 'bottom-right';
        case 7:
            return 'center';
        default:
            return 'top-left'
    }
}

/**Check rỗng listImg cho slider */
export const checkListImg = (listImg) => {
    const listImgNew = [];
    for (let i = 0; i < listImg.length; i++) {
        let item = {
            id: i + 1,
            image_url: listImg[i].image_url || undefined,
        }
        listImgNew.push(item);
    }
    return listImgNew;
}

/**
 * format number for percent (00 => 0.0)
 */

export const formatPercent = (number) => {
    let strNumber = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
    let res = strNumber.replace('€', '');
    res = res.replace(/ /, '');
    res = res.replace(',00', '.0');
    return res;
};

/**
 * convert interger to roman number
 * @param {number} num : interger
 */
export const romanize = (num) => {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

/**
 * convert path URL to link url
 * @param {string} url: route url 
 * @param {array} params: mảng chứa các giá trị của param
 */
export function convertToLinkUrl(url, params) {
    let linkUrl = url;
    const temp = linkUrl.split('/');
    let urlArr = [];
    for (let t = 0; t < temp.length; t++) {
        if (temp[t].includes(':')) urlArr.push(temp[t])
    }
    for (let i = 0; i < params.length; i++) {
        linkUrl = linkUrl.replace(urlArr[i], params[i]);
    }
    return linkUrl;
}

/**
 * Chuyển tiếng việt có dấu thành không dấu
 * @param {string} str: chuỗi có dấu 
 */

export function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}

/**
 * chuyen doi VND thanh ngoai te theo rate
 * @param {rate} rate: ti gia doi ra tien nuoc ngoai
 * @param {*} vnd : number tien viet nam
 * @param unit: currency code
 */
export const convertVNDtoOtherCurrency = (rate, vnd, unit) => {
    if (rate) {
        const temp = Number(vnd) / rate;
        const res = Math.round(temp * 100) / 100;
        return formatCurrency1(res)
    } else {
        return formatCurrency1(vnd);
    }
}

/**
 * convercase 'aaa' to Sentencecase 'Aaa'
 * @param {str} : string
 */
export const Sentencecase = (str) => {
    let firstLetter = str[0].toUpperCase();
    let remainLetter = str.slice(1, str.length);
    return firstLetter + remainLetter;
}