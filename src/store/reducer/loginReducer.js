import { loginAction } from '../action';

const initialState = {
    login: null,
    isFetching: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        //login
        case loginAction.LOGIN_REQUEST:
            return { ...state, isFetching: true, login: null, success: false };
        case loginAction.LOGIN_SUCCESS:
            return { ...state, isFetching: false, success: true, login: action.response };
        case loginAction.LOGIN_FAILURE:
            console.log('action.err', action.err);
            return { ...state, isFetching: false, error: action.err.detail, login: null };

        //clear
        case loginAction.LOGIN_CLEAR:
            return {
                ...state,
                login: null,
                isFetching: false,
                success: false,
                error: false
            };
        default:
            return state;
    }
}