import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const accountService = {
    login,
    getUserProfile,
    updateUserProfile,
    fogotPassword,
    resetPassword,
    changePassword,
    uploadImageFile,
}

function login(username, password, onNext) {
    const token = btoa(username + ":" + password);
    const body = { username, password }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, api.CONTENT_TYPE, 'Basic'),
        body: body
    };

    const url = api.getUrl(api.LOGIN)
    return api.handleRequest(url, requestOptions)
        .then(data => {
            if (data) {
                // store user details and basic auth credentials in local storage
                localStorage.setItem('user', JSON.stringify(data['detail']));
                if (onNext) { onNext() }
                window.location.reload()
            }
            return data;
        });
}

function getUserProfile() {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(TOKEN)
    };

    const params = {};
    const url = api.getUrl(api.USER_PROFILE, params);
    return api.handleRequest(url, requestOptions);
}

function fogotPassword(email, type_user) {
    const body = { email, type_user, is_react: true }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(TOKEN),
        body: body,
    };

    const url = api.getUrl(api.FORGOT_PASSWORD);
    return api.handleRequest(url, requestOptions);
}

function updateUserProfile(params) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(TOKEN),
        body: params,
    };

    // const params = {};
    const url = api.getUrl(api.USER_PROFILE_UPDATE);
    return api.handleRequest(url, requestOptions);
}

function resetPassword(key, password, password_repeat) {
    const body = { key, password, password_repeat }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(TOKEN),
        body: body,
    };

    const url = api.getUrl(api.RESET_PASSWORD);
    return api.handleRequest(url, requestOptions);
}

function changePassword(current_password, new_password, new_password_repeat) {
    const body = { current_password, new_password, new_password_repeat }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(TOKEN),
        body: body,
    };

    const url = api.getUrl(api.CHANGE_PASSWORD);
    return api.handleRequest(url, requestOptions);
}

async function uploadImageFile(file, sub_path) {
    console.log({ file, sub_path })
    let formData = new FormData();
    formData.append('file', file);
    formData.append('sub_path', sub_path);
    return await api.postWithFormData(formData, TOKEN, api.UPLOAD_FILE);
}
