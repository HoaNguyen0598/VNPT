import { examAction } from '../action';

const initialState = {
    List: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case examAction.LOAD_LIST_REQUEST:
            return {
                ...state,
                List: action.response,
                isStatus: false,
            };
        case examAction.LOAD_LIST_FAILURE:
            return {
                ...state,
                List: action.response,
                isStatus: false,
            };
        case examAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                List: action.response,
                isStatus: true,
            };

          
        default:
            return state;
    }
}