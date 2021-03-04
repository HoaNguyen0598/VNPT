import React from 'react'

const GatewayInfo = ({ code, producer, version, date, cpu, ram, sd, homeId }) => {
    return (
        <>
            <div className="device__info">
                <div className="row">
                    <div className="col-6 device__info--detail">
                        <div className="device__info--detail-info">
                            <p>Mã SERI</p>
                            <span>{code}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>NHÀ SẢN XUẤT</p>
                            <span>{producer}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>PHIÊN BẢN</p>
                            <span>{version}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>NGÀY SẢN XUẤT</p>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="col-6 device__info--detail">
                        <div className="device__info--detail-info">
                            <p>CPU</p>
                            <span>{cpu}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>RAM</p>
                            <span>{ram}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>SD</p>
                            <span>{sd}</span>
                        </div>
                        <div className="device__info--detail-info">
                            <p>HOME ID</p>
                            <span>{homeId}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GatewayInfo;