import React from 'react';
import ChangeLanguage from './ChangeLanguage';
import useClickOutside from 'hooks/useClickOutside';

const Header = () => {
    const { ref, isVisible, setIsVisible } = useClickOutside(false);
    return (
        <header className="header rc_header d-flex align-items-center">
            <div className="logo">
                <img className="w-100" src="https://via.placeholder.com/42" />
            </div>
            <div className="user">
                <div style={{ marginRight: 10 }}>
                    <ChangeLanguage />
                </div>
                <div className="user__wrap d-flex" onClick={() => setIsVisible(!isVisible)}>
                    <figure className="user__avatar">
                        <img src="https://via.placeholder.com/42" alt="avatar user" />
                    </figure>
                    <div className="user__info">
                        <span className="name">Nguyễn Tấn An</span>
                        <span className="position">Admin</span>
                    </div>
                </div>
                <div ref={ref} className={`user__actions ${isVisible ? 'active' : ''} `}>
                    <ul>
                        <li>
                            <i className="icon fas fa-user"></i>
                                Tài khoản
                        </li>
                        <li>
                            <i className="icon fas fa-cog"></i>
                                 Cài đặt
                        </li>
                        <li className="log-out">
                            <i className="icon fas fa-sign-out-alt"></i>
                                Đăng xuất
                        </li>
                    </ul>
                </div>
            </div>

        </header >
    )
}

export default Header;