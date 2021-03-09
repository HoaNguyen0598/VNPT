import breadcrumbAction from 'store/action/breadcrumbAction';


const initialState = {
    match: [],
    loadable: true,
};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case breadcrumbAction.SET_BREADCRUMB_MATCH:
            return {
                ...state,
                match: action.payload,
                loadable: false,
            }
        // CLEAR
        case breadcrumbAction.CLEAR_BREADCRUMB_MATCH:
            return initialState;
        default:
            return newState;
    }
}