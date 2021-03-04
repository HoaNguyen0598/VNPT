import Input from './Input';

import React from 'react'

const InputIcon = ({ placeholder }) => {
    return (
        <>
            <Input
                className="rc_input"
                placeholder={placeholder}
                prefix={<i className="fas fa-user rc_input--icon" style={{ color: "#7bce92" }}></i>}
            />
        </>
    )
}
export default InputIcon;