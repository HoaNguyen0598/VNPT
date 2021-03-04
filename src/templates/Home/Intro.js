import ChangeLanguage from 'components/common/Main/ChangeLanguage';
import { PAGES_URL } from 'contant';
import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="t-intro">
            <div className="t-intro_header">
                <div className="logo">
                    <img src="/images/scb.svg" alt="logo_with_text" />
                </div>
            </div>
            <div className="t-intro_content">
                <div className="block">
                    <div className="block_title">
                        TÀI KHOẢN
                    </div>
                    <div className="block_content">
                        <div className="block_content-item">
                            <div className="image">
                                <img src="/images/account.png" alt="account" />
                            </div>
                            <Link to={PAGES_URL.signin} className="name">
                                ĐĂNG NHẬP
                            </Link>
                        </div>
                        <div className="block_content-item">
                            <div className="image">
                                <img src="/images/account.png" alt="account" />
                            </div>
                            <Link to="/user/create/" className="name">
                                ĐĂNG KÝ TÀI KHOẢN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Intro;
