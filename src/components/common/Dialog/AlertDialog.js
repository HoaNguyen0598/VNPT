import { Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const AlertDialog = (props) => {
    const { visible, onClose, onOk, okText, message, ...att } = props;
    const { t: translate } = useTranslation();
    const onOkText = okText || translate('ok');
    return (
        <Modal
            centered={true}
            forceRender
            visible={visible}
            onCancel={onClose}
            className={'rc_dialogConfirm swal-overlay swal-overlay--show-modal'}
            width={410}
            footer={null}
            {...att}
        >
            <div className="swal-modal">
                <div className="swal-icon swal-icon--warning">
                    <span className="swal-icon--warning__body">
                        <span className="swal-icon--warning__dot"></span>
                    </span>
                </div>
                <div className="swal-title" >{message}</div>
                <div className="swal-footer mb-3">
                    <div className="swal-button-container">
                        <button className="swal-button swal-button--confirm" onClick={onClose}>{onOkText}</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AlertDialog;