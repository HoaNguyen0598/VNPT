import React from 'react';
import { convertFloatToString, convertStringToFloat, validatoInputCurrency } from '../../../functions/Utils';

const InputCurrency = ({ disabled, value, style, readOnly, placeholder, min, max, decimalLimit = 2, onChange }) => {

    const [number, setNumber] = React.useState(false)
    const onChangeNum = (num) => {
        let text = num
        if (typeof text == "string") {
            text = convertStringToFloat(text, decimalLimit, true)
        }
        // console.log(text)
        if (validatoInputCurrency(text) || text == "") {
            if (onChange) {
                onChange(text == "" ? "" : text)
            }
        }
    }

    const onBlur = (num) => {
        let text = num
        if (typeof text == "string") {
            text = convertStringToFloat(text, decimalLimit, true)
        }
        if (validatoInputCurrency(text) || text == "") {
            if (onChange) {
                // console.log(text < min || text == "", text, min)
                if (min && (text < min || text == "")) {
                    text = min
                }
                if (max && max < text) {
                    text = max
                }
                onChange(text == "" ? "" : text)
            }
        }
    }

    React.useEffect(() => {
        if (value) {
            if (typeof value == "string") {
                if (value.indexOf(",") != -1) {
                    setNumber((convertStringToFloat(value)))
                }
                else {
                    setNumber((value))
                }
            }
            else {
                setNumber((value))
            }
        }
        else {
            setNumber(0)
        }
    }, [value])

    return (
        <div className="rc-textfieldcurrency">
            <input
                disabled={disabled}
                value={number > 0 ? convertFloatToString(number) : ''}
                // type={type}
                style={style}
                onBlur={e => onBlur(e.target.value)}
                placeholder={placeholder}
                readOnly={readOnly}
                onChange={e => onChangeNum(e.target.value)}
                className="rc-textfieldcurrency_input ant-input" />
        </div>
    )
}
export default InputCurrency;