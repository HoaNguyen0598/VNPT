import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from 'functions/Utils';
import { loginAction } from "store/action/index";
import { NOTIFICATION_TYPE } from 'contant'
import { useTranslation } from 'react-i18next';
import StaticLoading from 'components/common/Loading/StaticLoading';
import ButtonBase from 'components/base/Button/ButtonBase';
import ChangeLanguage from 'components/common/Main/ChangeLanguage';

const ForgotPassword = () => {
    const { t: translate } = useTranslation(['login'])
    const dispatch = useDispatch();
    const dataLogin = useSelector(state => state.loginReducer);
    let { error, isFetching } = dataLogin;
    const [formForgot] = Form.useForm();

    useEffect(() => {
        console.log('errorTemplate', error);
        if (error) {
            showNotification({ type: NOTIFICATION_TYPE.error, title: 'Error', message: error.detail })
        }
    }, [error])

    const onFinish = (values) => {
        const { username, password } = values;
        dispatch(loginAction.loadLogin({ username: username, password: password }))
    }
    return (
        <div className="t-login_form">
            <div className="t-login_form_header">
                <div className="t-login_form_header_top">
                    <div className="t-login_form_title">
                        {translate('quên mật khẩu')}
                    </div>
                    <ChangeLanguage minimize />
                </div>
                <div className="t-login_form_description">
                    Vui lòng nhập email hoặc số điện thoại <br />
để khôi phục tài khoản
                </div>
            </div>
            <div className='m_login--form'>
                {error &&
                    <div class="form-group">
                        <div class="alert alert-danger " role="alert">{error}</div>
                    </div>
                }
                {isFetching && <StaticLoading />}
                <Form
                    name="basic"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={formForgot}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: translate('Please_input_your_username'),
                            },
                        ]}
                    >
                        <Input
                            className="rc_input"
                            placeholder="Nhập địa chỉ email hoặc số điện thoại"
                            prefix={<i className="fas fa-user rc_input--icon" style={{ color: "#7bce92" }}></i>}
                        />
                    </Form.Item>
                    <ButtonBase className="mt-4" type="submit" size="extralarge" block>Gửi mã</ButtonBase>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword;