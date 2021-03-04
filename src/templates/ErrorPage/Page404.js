import React, { Component } from 'react';

import Error from './Error.js'

class Page404 extends Component {
    render() {
        return (
            <Error code="404" description="Page not found !"/>
        )
    }
}

export default Page404;
