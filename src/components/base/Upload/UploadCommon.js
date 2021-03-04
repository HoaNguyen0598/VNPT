import React from 'react';
import { Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import { MAX_FILE_SIZE, NOTIFICATION_TYPE, UPLOAD_ACCEPT_TYPE } from 'contant';
// import { isValidDocumentType, isValidImageType } from 'functions/Helper';
import { showNotification } from 'functions/Utils';

const UploadCommon = ({
    accept,
    showUploadList = false,
    multiple = false,
    ...props
}) => {
    const { t: translate } = useTranslation();
    const defaultCustomRequest = () => { };

    const showNotify = (message) => {
        showNotification({ type: NOTIFICATION_TYPE.warning, title: 'Warning', message });
    }

    const beforeUpload = (file, fileList) => {
        const totalFileSize = fileList.reduce((accumulator, currentValue) => {
            const fileSize = currentValue.size;
            const total = accumulator + fileSize;
            return total;
        }, 0)
        const isLt10M = totalFileSize / MAX_FILE_SIZE < 1;
        if (!isLt10M) { // Total file size larger than 10M
            showNotify(translate('total_file_size_must_smaller_than_10MB'));
            return Promise.reject();
        }
        let isValidType = true; // Default accept all file type
        // switch (accept) {
        //     case UPLOAD_ACCEPT_TYPE.DOCUMENT:
        //         isValidType = isValidDocumentType(file.type);
        //         break;
        //     case UPLOAD_ACCEPT_TYPE.IMAGE:
        //         isValidType = isValidImageType(file.type);
        //         break;
        //     default:
        //         break;
        // }
        // if (!isValidType) {
        //     showNotify(translate('file_not_valid'));
        // }
        return Promise.resolve();
    }
    return (
        <Upload
            accept={accept}
            className='rc_uploadcommon'
            showUploadList={showUploadList}
            multiple={multiple}
            customRequest={defaultCustomRequest}
            beforeUpload={beforeUpload}
            {...props}
        >
            {props.children}
        </Upload>
    )
}
export default UploadCommon;