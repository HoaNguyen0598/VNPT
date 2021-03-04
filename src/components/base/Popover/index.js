import React, { useState, useEffect } from 'react';
import { Popover as PopoverAntd } from 'antd'

const Popover = (props) => {
    useEffect(() => {
        const menuPopover = document.getElementsByClassName('ant-popover')[0]
        if (menuPopover) {
            menuPopover.classList.add('rc_menuPopover');
        }
    })
    const { children, content, title, trigger, placement, ...attr } = props;
    const [visible, setVisible] = useState(false);

    const hide = () => {
        setVisible(false)
    }
    const handleVisibleChange = visible => {
        setVisible(visible);
    };
    return (
        <div className='rc_popover'>
            <PopoverAntd
                content={content}
                title={title}
                trigger={trigger ? trigger : "click"}
                visible={visible}
                onVisibleChange={handleVisibleChange}
                placement={placement ? placement : 'bottom'}
                {...attr}
            >
                {children}
            </PopoverAntd>
        </div>
    )
}

export default Popover