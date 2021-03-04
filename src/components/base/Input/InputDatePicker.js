import React from "react";
import { DatePicker } from 'antd';
import { datePichkerLocation, translate } from "functions/Utils";
import { useTranslation } from "react-i18next";

const dateFormat = "DD/MM/YYYY";
const InputDatePicker = (props) => {
    const { t } = useTranslation();
    const { placeholder, isClear, disabledDate, className, style, ...atrr } = props;

    return (
        <DatePicker
            className={className ? className : 'rc_datePicker'}
            locale={datePichkerLocation()}
            format={dateFormat}
            placeholder={placeholder ? translate(placeholder, t) : translate("-", t)}
            style={style ? style : { width: '100%', height: 40 }}
            disabledDate={disabledDate}
            suffixIcon={<i class="las la-calendar" style={{ fontSize: 20, color: '#000000e3' }}></i>}
            autoComplete="off"
            {...atrr}
        />
    )
}

export default InputDatePicker;