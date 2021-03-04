import IconCustom from "components/base/IconCustom";
import React from "react";

const NotifyItem = ({
    iconName,
    title,
    time,
    description,
}) => {
    return (
        <div className='rc_notifyitem'>
            <div className="rc_notifyitem_icon">
                <IconCustom iconName={iconName} />
            </div>
            <div className="rc_notifyitem_content">
                <div className="rc_notifyitem_title">
                    {title}
                </div>
                <div className="rc_notifyitem_time">
                    {time}
                </div>
                <div className="rc_notifyitem_description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default NotifyItem;