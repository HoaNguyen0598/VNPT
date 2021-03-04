import { Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const DialogConfirm = (props) => {
    const { visible, widthModal, onCancel, onOk, okText, cancelText, showCancel = true, title, ...att } = props;
    const { t: translate } = useTranslation();
    const onOkText = okText || translate('yes');
    return (
        <Modal
            centered={true}
            forceRender
            visible={visible}
            onCancel={onCancel}
            className={'rc_dialogConfirm swal-overlay swal-overlay--show-modal'}
            width={widthModal ? widthModal : "410px"}
            footer={null}
            {...att}
        >
            <div className="swal-modal">
                <div className="swal-icon swal-icon--warning">
                    <span className="swal-icon--warning__body">
                        <span className="swal-icon--warning__dot"></span>
                    </span>
                </div>
                <div className="swal-title" >{title}</div>
                <div className="swal-footer mb-3">
                    {showCancel && <div className="swal-button-container">
                        <button className="swal-button swal-button--cancel" onClick={onCancel}>{cancelText || translate('no')}</button>
                    </div>}
                    <div className="swal-button-container">
                        <button className="swal-button swal-button--confirm" onClick={onOk}>{onOkText}</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DialogConfirm;