import React from 'react';

const InputPincode = (props) => {
    const { size, prefix, placeholder, onlyNumber, ...atrr } = props;
    const { value } = props;
    const arrayCode = (value || '').split('');
    console.log('value', value);
    return (
        <div className="rc_inputpincode">
            <div className="rc_inputpincode_code">
                {arrayCode.map((code, index) => {
                    return (
                        <span className="rc_inputpincode_code_number" key={index}>
                            {code}
                        </span>
                    )
                })}
            </div>
            <input type="hidden" {...atrr} />
        </div>
    )
}
export default InputPincode;