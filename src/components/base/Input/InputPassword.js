import React from 'react';
import { Input } from 'antd';

const InputPassword = (props) => {
    return (
        <Input.Password
            className="rc_input rc_input_password"
            prefix={<i className="la la-lock" style={{ color: "#7bce92" }}></i>}
            {...props}
        />
    )
}
export default InputPassword;