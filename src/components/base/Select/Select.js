import React from 'react'
import { Select as SelectAntd } from 'antd'
import { useTranslation } from 'react-i18next';
import { mapModifiers } from 'functions/Utils';

const Select = (props) => {
    const {
        data,
        modifiers, // Normal, Purple, Outlline
        defaultValue,
        onChange,
        ...atrr
    } = props;
    const { Option } = SelectAntd;
    const { t: translate } = useTranslation();

    const dropdownRender = menu => {
        if (menu.props.options.length === 0) {
            return <div style={{ padding: '10px 10px', textAlign: 'center', color: 'white' }}>{translate('nodata')}</div>;
        }
        return menu;
    };
    /**
     * Custom Option
     * <a style={{ position: 'absolute', right: '15px' }}>{item.floor}
     */
    return (
        <div className={mapModifiers('rc-pulldow rc_pulldow_smart', modifiers)}>
            <SelectAntd
                className="rc-pulldown-select rc_dropdown"
                size="large"
                defaultValue={defaultValue ? defaultValue.toString() : undefined}
                onChange={onChange}
                dropdownRender={dropdownRender}
                getPopupContainer={() => document.querySelector(".rc-pulldown_dropdowncontainer")}
                {...atrr}
            >
                {
                    data && data.map((item, index) =>
                        <Option value={item.value.toString()} key={index}>
                            {translate(item.label)}
                            <a style={{ position: 'absolute', right: '15px' }}>{item.floor}</a>
                        </Option>)
                }
            </SelectAntd>
            <div className="rc-pulldown_dropdowncontainer" />
        </div>
    )
}

export default Select;
