import React, { useState, useEffect } from 'react';
import { Upload } from 'antd';

const UploadImage = ({ data, isShowAvatar, ...props }) => {
    const { onChange, ...remainingProp } = props
    useEffect(() => {
        if (isShowAvatar) {
            setState({ previewImg: null })
        }
    }, [isShowAvatar])
    const [state, setState] = useState({
        previewVisible: false,
        previewTitle: data,
        fileList: [],
        previewImg: null,
        name: 'Valencia'
    })
    const handleChange = async (info) => {
        const { fileList: newFileList } = info;
        //console.log('newFileList', newFileList);
        onChange && onChange(info);
        let previewUrl;
        const lastItem = newFileList.length - 1;
        const file = newFileList[lastItem];
        previewUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
        });
        setState({
            previewImg: <img class="first_img" src={previewUrl} style={{ width: '100%', height: '100%' }} />
        })
    };
    return (
        <>
            <Upload
                showUploadList={false}
                customRequest={() => { }}
                onChange={handleChange}
                {...remainingProp}
            >
                <div className="modalUpload__image--img">
                    {!state.previewImg &&
                        <div className="modalUpload__image--img-detail">
                            <img src="https://cdn.zeplin.io/5fe9431193ebff977afe4420/assets/055f0a47-2f85-445c-86c3-def541dafef9.svg" />
                            <p>Kéo thả hoặc <span style={{ color: 'green' }}>Chọn tệp</span></p>
                            <p className="modalUpload__image--imgDetail">Hổ trợ định dạng: .jpg, .png</p>
                        </div>
                    }
                    {
                        state.previewImg
                    }
                    {/* {state.previewImg} */}
                </div>
            </Upload>
        </>
    )
}

export default UploadImage;