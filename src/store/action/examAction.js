const actions = {

    EXAMPLE_LOAD_LIST_REQUEST: 'LIST_REQUEST',
    EXAMPLE_LOAD_LIST_FAILURE: 'LIST_FAILURE',
    EXAMPLE_LOAD_LIST_SUCCESS: 'LIST_SUCCESS',

    ExampleLoadList: (params) => ({
        type: actions.EXAMPLE_LOAD_LIST_REQUEST,
        params: params
    }),

};
export default actions;