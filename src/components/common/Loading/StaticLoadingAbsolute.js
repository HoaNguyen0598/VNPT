import React from 'react';
import { Spin } from 'antd';


const StaticLoadingAbsolute = (props) => {
    return (
        <div className='loading-absolute'>
            <Spin className="loading_full" tip="Loading..."></Spin>
        </div>
    )
}

export default StaticLoadingAbsolute;