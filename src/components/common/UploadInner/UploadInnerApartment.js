import React from 'react';
import IconCustom from 'components/base/IconCustom';

const UploadInnerAvatar = ({ loading, previewUrl }) => {
    return (
        <div className="rc_uploadinnerapartment">
            {loading
                ? <div className="loading" />
                : (
                    <div className="rc_uploadinnerapartment_image">
                        {previewUrl && <img src={previewUrl} alt="avatar" />}
                    </div>

                )}
            <div className="rc_uploadinnerapartment_upload">
                <IconCustom iconName="photo" size={24} />
                <span>Chỉnh sửa</span>
            </div>
        </div>
    )
}
export default UploadInnerAvatar;