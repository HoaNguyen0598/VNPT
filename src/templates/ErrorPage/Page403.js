import React, { Component } from 'react';

import Error from './Error.js'

class Page403 extends Component {
    render() {
        return (
            <Error code="403" description="Access Denied/Forbidden !"/>
        )
    }
}

export default Page403;
