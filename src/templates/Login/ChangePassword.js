import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from 'functions/Utils';
import { loginAction } from "store/action/index";
import { NOTIFICATION_TYPE } from 'contant'
import { useTranslation } from 'react-i18next';
import StaticLoading from 'components/common/Loading/StaticLoading';
import InputPassword from 'components/base/Input/InputPassword';
import ButtonBase from 'components/base/Button/ButtonBase';
import ChangeLanguage from 'components/common/Main/ChangeLanguage';

const ChangePassword = () => {
    const { t: translate } = useTranslation(['login'])
    const dispatch = useDispatch();
    const dataLogin = useSelector(state => state.loginReducer);
    let { error, isFetching } = dataLogin;
    const [formChangePw] = Form.useForm();

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
                        {translate('đổi mật khẩu')}
                    </div>
                    <ChangeLanguage minimize />
                </div>
                <div className="t-login_form_description">
                    Bạn hãy đặt lại mật khẩu. Để có thể đăng nhập <br />
vào Smart Home
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
                    form={formChangePw}
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
                        <InputPassword placeholder="Mật khẩu mới" />
                    </Form.Item>

                    <br />
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: translate('Please_input_your_password'),
                            },
                        ]}
                    >
                        <InputPassword placeholder="Xác nhận mật khẩu mới" />
                    </Form.Item>
                    <ButtonBase className="mt-4" type="submit" size="extralarge" block>Gửi mã</ButtonBase>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword;