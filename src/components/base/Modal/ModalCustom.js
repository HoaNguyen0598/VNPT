import { Modal } from "antd";
import React from "react";

const ModalCustom = (props) => {
    const { visible, width, onClose, onAfterClose, title, maskClosable = false, bodyClassname = '', ...remainingProps } = props;
    return (
        <Modal
            className='rc_modal'
            forceRender
            visible={visible}
            onCancel={onClose}
            afterClose={onAfterClose}
            closable={true}
            centered={true}
            footer={null}
            width={width}
            maskClosable={maskClosable}
            closeIcon={<span className="rc_modal_closeicon"><i class="fas fa-times"></i></span>}
            {...remainingProps}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                </div>
                <div className={`modal-body ${bodyClassname}`}>{props.children}</div>
            </div>
        </Modal>
    );
};

export default ModalCustom;
