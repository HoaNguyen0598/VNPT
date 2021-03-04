import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from 'functions/Utils';
import { loginAction } from "store/action/index";
import { NOTIFICATION_TYPE } from 'contant'
import { useTranslation } from 'react-i18next';
import StaticLoading from 'components/common/Loading/StaticLoading';
import InputPassword from 'components/base/Input/InputPassword';
import ButtonBase from 'components/base/Button/ButtonBase';
import Checkbox from 'components/base/Checkbox';
import ChangeLanguage from 'components/common/Main/ChangeLanguage';

const Login = () => {
    const { t: translate } = useTranslation(['login'])
    const dispatch = useDispatch();
    const dataLogin = useSelector(state => state.loginReducer);
    let { error, isFetching } = dataLogin;
    const [formLogin] = Form.useForm();

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
                        {translate('Đăng nhập')}
                    </div>
                    <ChangeLanguage minimize />
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
                    form={formLogin}
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
                            placeholder="Tên đăng nhập"
                            prefix={<i className="fas fa-user rc_input--icon" style={{ color: "#7bce92" }}></i>}
                        />
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
                        <InputPassword />
                    </Form.Item>
                    <div className="t-login_form_remember">
                        <Checkbox>Ghi nhớ ?</Checkbox>
                        <Link to="/forgot-password">Quên mật khẩu?</Link>
                    </div>
                    <ButtonBase type="submit" size="extralarge" block>{translate('login')}</ButtonBase>
                </Form>
            </div>
        </div>
    )
}

export default Login;