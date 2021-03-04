import React from 'react'
import { Radio as RadioAnt } from 'antd'

const RadioCustom = (props) => {
    return (
        <div className="rc-radio">
            <RadioAnt {...props}>{props.children}</RadioAnt>
        </div>
    )
}

export default RadioCustom;