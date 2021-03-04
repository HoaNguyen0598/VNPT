import React from 'react'
import { Select } from 'antd'
import { Trans } from 'react-i18next'

const DropdownPurple = props => {
    const { data, onChange, defaultValue, name, ...attr } = props
    const { Option } = Select
    return (
        <div className="dropdown m_select m_dropdown">
            <Select
                className="m_select--label m_dropdown--label square dropdown-toggle"
                name={name}
                defaultValue={defaultValue ? defaultValue.toString() : undefined}
                onChange={onChange}
                {...attr}
            >
                {
                    data && data.map((item, index) =>
                        <Option value={item.value.toString()} key={index}><Trans>{item.label}</Trans></Option>)
                }
            </Select>
        </div>
    )

}
export default DropdownPurple;
