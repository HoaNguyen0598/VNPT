import React from 'react';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
}
const Datepicker = ({ }) => {
    return (
        <>
            <h3>DatePicker</h3>
            <div style={{ width: '340px' }}>
                <DatePicker onChange={onChange} />
            </div>
        </>
    )
}
export default Datepicker;