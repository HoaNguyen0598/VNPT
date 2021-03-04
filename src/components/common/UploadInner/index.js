import React from 'react';
import IconCustom from 'components/base/IconCustom';
import { IMAGES_PATH, mapModifiers } from 'functions/Utils';
import { useTranslation } from 'react-i18next';

const UploadInner = ({ description = 'Hổ trợ định dạng: .jpg, .png', previewUrl, modifiers, loading }) => {
    const className = mapModifiers('rc_uploadinner', [...(modifiers || []), ...[previewUrl ? 'loaded' : undefined]])
    const { t: translate } = useTranslation();
    return (
        <div className={className}>
            {loading ? <div className="loading" /> : previewUrl ? (
                <div className="rc_uploadinner-preview">
                    <img src={previewUrl} className="pre-img" alt="Preview" />
                    <div className="rc_uploadinner-upload">
                        <IconCustom iconName="photo" size={24} />
                        <span>{translate('edit')}</span>
                    </div>
                </div>
            ) :
                (
                    <div className="rc_uploadinner-default">
                        <div className="rc_uploadinner-img">
                            <img src={modifiers === "excel" ? IMAGES_PATH.imgUploadExcel : IMAGES_PATH.imgUpload} alt="Upload" className="img-default" />
                        </div>
                        <div className="rc_uploadinner-title">
                            {
                                modifiers == "excel" ?
                                    <p>Chọn tệp Excel</p>
                                    :
                                    <p>{translate('drag_drop_or')} <span>{translate('select_file')}</span></p>
                            }
                        </div>
                        <p className="rc_uploadinner-description">{translate('support_format_jpg_png')}</p>
                    </div>
                )
            }
        </div>
    )
}
export default UploadInner;