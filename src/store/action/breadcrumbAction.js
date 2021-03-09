const actions = {
    SET_BREADCRUMB_MATCH: 'SET_BREADCRUMB_MATCH',
    CLEAR_BREADCRUMB_MATCH: 'CLEAR_BREADCRUMB_MATCH',

    setBreadcrumb: (payload) => ({
        type: actions.SET_BREADCRUMB_MATCH,
        payload,
    }),

    clearBreadcrumb: () => ({
        type: actions.CLEAR_BREADCRUMB_MATCH
    }),
}

export default actions;