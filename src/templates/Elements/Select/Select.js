import React from 'react';
import SelectDefalut from 'components/base/Select/Select';

const data = [
    { value: 1, label: 'Tất cả' },
    { value: 2, label: 'Thành công' },
    { value: 3, label: 'Không thành công' },
    { value: 4, label: 'Hòa' },
]
const Select = ({ }) => {
    return (
        <>
            <h3>Select</h3>
            <div style={{ width: '130px' }}>
                <SelectDefalut
                    data={data}
                    defaultValue={data[0].value}
                />
            </div>
        </>
    )
}
export default Select;