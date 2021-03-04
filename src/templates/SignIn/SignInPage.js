import ChangeLanguage from 'components/common/Main/ChangeLanguage';
import React from 'react';
import { Form, Upload } from 'antd';
import Input from 'components/base/Input/Input';
import ButtonBase from 'components/base/Button/ButtonBase';
import { NOTIFICATION_TYPE, RULES, UPLOAD_ACCEPT_TYPE } from 'contant';
import UploadCommon from 'components/base/Upload/UploadCommon';
import UploadInner from 'components/common/UploadInner';
import { showNotification } from 'functions/Utils';

const SignInPage = () => {
    const [formLogin] = Form.useForm();
    const onFinish = (values) => {
        console.log({ values });
        showNotification({ type: NOTIFICATION_TYPE.success, title: 'SUCCESS', message: "Login success" })
    }
    // const onChange = (file) => {
    //     formLogin.setFieldsValue({ 'fingerID': file.file.name })
    // }
    return (
        <div className="t-signin ">
            <div className="t-signin_header">
                <div className="logo">
                    <img src="/images/scb.svg" alt="logo_with_text" />
                </div>
            </div>
            <div className="t-signin_wrapper">
                <div className="content">
                    <div className="content-title">
                        ĐĂNG NHẬP
                    </div>
                    <div className="content-form">
                        <Form
                            form={formLogin}
                            onFinish={onFinish}
                            name="formLogin"
                        >
                            <div className="content-form_item">
                                <div className="title">
                                    User ID:
                                </div>
                                <div style={{ width: "80%" }}>
                                    <Form.Item
                                        name="userID"
                                    // rules={RULES.require.form()}
                                    >
                                        <Input
                                            className="rc_input"
                                            placeholder="Nhập user ID"
                                            type="text"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <br />
                            <div className="content-form_item">
                                <div className="title">
                                    Face ID:
                                </div>
                                <div className="upload">
                                    <Form.Item
                                        name="faceID"
                                    >
                                        <Input
                                            className="rc_input rc_input_file"
                                            placeholder="input faceID"
                                            type="file"
                                            rules={RULES.require.form()}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <br />
                            <div className="content-form_item">
                                <div className="title">
                                    Finger ID:
                                </div>
                                <div className="upload">
                                    {/* <Upload onChange={onChange}>
                                        <Input
                                            className="rc_input"
                                        />
                                    </Upload> */}
                                    <Form.Item
                                        name="fingerID"
                                    >
                                        <Input
                                            className="rc_input rc_input_file"
                                            placeholder="input FingerId"
                                            type='file'
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <br />
                            <div className="group-button text-right">
                                <ButtonBase type="submit" size="large" >Login</ButtonBase>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignInPage;