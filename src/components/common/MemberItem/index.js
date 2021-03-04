import React from "react";

const MemberItem = ({
    imgSrc,
    name,
}) => {
    return (
        <div className='rc_memberitem'>
            <div className="rc_memberitem_image">
                <img src={imgSrc} alt="avatar user" />
            </div>
            <div className="rc_memberitem_name">
                {name}
            </div>
        </div>
    )
}

export default MemberItem;