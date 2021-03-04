import React from 'react';

import { Input } from 'antd';

const TextArea = (props) => {
    const { TextArea: TextAreaAnt } = Input;
    return (

        <TextAreaAnt className="rc_textarea"
            {...props}>{props.children}
        </TextAreaAnt>

    )
}

export default TextArea;