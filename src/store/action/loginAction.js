const name = 'LOGIN_';
const actions = {

    LOGIN_REQUEST: name + 'REQUEST',
    LOGIN_FAILURE: name + 'FAILURE',
    LOGIN_SUCCESS: name + 'SUCCESS',

    LOGIN_CLEAR: name + 'CLEAR',

    loadLogin: (params) => ({
        type: actions.LOGIN_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.LOGIN_CLEAR,
    })
}

export default actions;