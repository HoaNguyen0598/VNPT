import React, { Component } from 'react';

import Error from './Error.js'

class Page500 extends Component {
    render() {
        return (
            <Error code="Error" description="Error from Server !" />
        )
    }
}

export default Page500;
