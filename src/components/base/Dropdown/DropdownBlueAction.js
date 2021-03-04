import React from 'react'
import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const DropdownBlueAction = props => {
    const { optionsAction, handleMenuClick, placeholder } = props
    const menu = (
        <Menu onClick={handleMenuClick}>
            { optionsAction && optionsAction.map((item, index) =>
                <Menu.Item key={index} >
                    {item.label}
                </Menu.Item>
            )}
        </Menu>
    );
    return (
        <div className="dropdown m-action blueDropdown">
            <Dropdown
                overlay={menu}
                overlayClassName="blueDropdown"
                trigger={['click']}
            >
                <Button className="btn_dropdown_outline dropdown-toggle">
                    {placeholder || 'Action'} <DownOutlined />
                </Button>
            </Dropdown>
        </div>

    )
}
export default DropdownBlueAction;