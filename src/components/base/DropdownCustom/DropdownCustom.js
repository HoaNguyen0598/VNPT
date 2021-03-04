import React, { useState } from 'react'
import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { mapModifiers } from 'functions/Utils'
import { useTranslation } from 'react-i18next'

const DropdownCustom = props => {
    const {
        menuOptions,
        defaultOption,
        handleMenuClick,
        modifiers,
        placeholder = 'action',
        useSelected = false,
    } = props;
    const { t: translate } = useTranslation();
    const className = mapModifiers('rc-dropdown', modifiers);
    const [selectedMenu, setSelectedMenu] = useState(defaultOption);
    const onClickMenu = (value) => {
        setSelectedMenu(value);
        handleMenuClick && handleMenuClick(value);
    }
    const renderLabel = (selected) => {
        return (menuOptions || []).find(item => item.value === selected).label || translate(placeholder);
    }
    const menu = (
        <Menu>
            {(menuOptions || []).map((item, index) =>
                <Menu.Item key={index} onClick={() => onClickMenu(item.value)} >
                    {item.icon && <i class={`las ${item.icon}`}></i>}  <span>{item.label}</span>
                </Menu.Item>
            )}
        </Menu>
    );
    return (
        <div className={className}>
            <Dropdown
                overlay={menu}
                overlayClassName="rc-dropdown_menu"
                trigger={['click']}
            >
                <Button className="rc-dropdown_btn">
                    {useSelected && selectedMenu ? renderLabel(selectedMenu) : translate(placeholder)}
                </Button>
            </Dropdown>
        </div>

    )
}
export default DropdownCustom;