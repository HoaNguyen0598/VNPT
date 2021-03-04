import React from "react";
import { useTranslation } from "react-i18next";

const OwnerInfo = ({
    imgSrc,
    status,
    name,
    phoneNumber,
    email,
}) => {
    const { t: translate } = useTranslation();
    return (
        <div className='rc_ownerinfo'>
            <div className="rc_ownerinfo_avatar_wrapper">
                <div className="rc_ownerinfo_avatar">
                    <img src={imgSrc} alt={name} />
                </div>
            </div>
            <div className="rc_ownerinfo_status">
                <i class="fas fa-check-circle"></i> {status}
            </div>
            <div className="rc_ownerinfo_info">
                <div className="rc_ownerinfo_item">
                    <label className="rc_ownerinfo_info_label">
                        {translate('full_name')}
                    </label>
                    <div className="rc_ownerinfo_info_value">
                        {name}
                    </div>
                </div>
                <div className="rc_ownerinfo_item">
                    <label className="rc_ownerinfo_info_label">
                        {translate('phone_number')}
                    </label>
                    <div className="rc_ownerinfo_info_value">
                        {phoneNumber}
                    </div>
                </div>
                <div className="rc_ownerinfo_item">
                    <label className="rc_ownerinfo_info_label">
                        Email
                    </label>
                    <div className="rc_ownerinfo_value">
                        {email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerInfo;