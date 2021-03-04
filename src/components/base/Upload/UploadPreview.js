import React, { useEffect, useState } from 'react';
import UploadCommon from './UploadCommon';
import { UPLOAD_ACCEPT_TYPE } from 'contant';
import UploadInner from 'components/common/UploadInner';
import { isBlobFile } from 'functions/Utils';

const UploadPreview = (props) => {
    const { onChange, variant, modifiers, ...remainingProps } = props;
    const { file } = props;
    const [previewImage, setPreviewImage] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (file && !isBlobFile(file)) {
            setPreviewImage(file)
        }
    }, [file])

    const handleUploadChange = async (info) => {
        onChange && onChange(info);
        setLoading(true);
        const { fileList: newFileList } = info;
        const lastItem = newFileList.slice(-1);
        let previewUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(lastItem[0].originFileObj);
            reader.onload = () => resolve(reader.result);
        });
        setLoading(false);
        setPreviewImage(previewUrl);
    };
    const uploadInnerProps = {
        loading,
        previewUrl: previewImage,
    }
    return (
        <UploadCommon
            accept={UPLOAD_ACCEPT_TYPE.IMAGE}
            onChange={handleUploadChange}
            {...remainingProps}
        >
            {variant === 'apartment' ?
                <UploadInner modifiers={["apartment"]} {...uploadInnerProps} />
                : <UploadInner {...uploadInnerProps} modifiers={modifiers} />}
        </UploadCommon>
    )
}

export default UploadPreview;