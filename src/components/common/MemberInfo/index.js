import React from "react";

const MemberInfo = ({
    imgSrc,
    name,
}) => {
    return (
        <div className='rc_memberinfo'>
            <div className="rc_memberinfo_image">
                <img src={imgSrc} alt="avatar user" />
            </div>
            <div className="rc_memberinfo_name">
                {name}
            </div>
        </div>
    )
}

export default MemberInfo;