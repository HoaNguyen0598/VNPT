import React from 'react'
const DeviceInfo = ({ code, group, type, img, gateway }) => {
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <div className="device__info">
                        <div className="row">
                            <div className="col-3  device__info--image">
                                <img src={img}></img>
                                <p>Đèn (Độ sáng)</p>
                            </div>
                            <div className="col-4 device__info--detail">
                                <div className="device__info--detail-info">
                                    <p>Mã SERI</p>
                                    <span>{code}</span>
                                </div>
                                <div className="device__info--detail-info">
                                    <p>Nhóm</p>
                                    <span>{group}</span>
                                </div>
                                <div className="device__info--detail-info">
                                    <p>Loại</p>
                                    <span>{type}</span>
                                </div>
                                <div className="device__info--detail-info">
                                    <p>Ghi chú</p>
                                </div>
                            </div>
                            <div className="col-5 device__info--action">
                                <div className="device__info--action-info">
                                    <p>GATEWAY</p>
                                    <span>{gateway}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeviceInfo;