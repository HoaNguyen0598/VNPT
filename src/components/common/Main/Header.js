import React, { useState } from 'react';

const Header = ({ handleMenu }) => {

    const [dropdown, setDropdown] = useState(false);

    const handleClickItem = () => {
        handleMenu && handleMenu()
    }
    return (
        <div className="Header">
            <div className="Header_logo">
                <a href="">
                    <img className="Header_logo-img" src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/logo_ekyc.svg" />
                </a>
            </div>
            <div className="Header_right">
                <div className="Header_right-bar"
                    onClick={handleClickItem}
                >
                    <a href="#">
                        <i
                            className="fas fa-bars"
                        ></i>
                    </a>
                </div>
                <div className="Header_right-link">
                    <ul className="Header_right-list">
                        <li className="Header_right-list-home">
                            <a href="#"><i class="fas fa-home"></i> <span>Trang chủ</span></a>
                        </li>
                        <li className="Header_right-list-user">
                            <div
                                className="Header_right-list-drop"
                                onClick={() => setDropdown(!dropdown)}
                            >
                                <span>xuanthinh2405@gmail.com</span>
                                <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/user.jpg"></img>
                            </div>
                            <div className={`Dropdown-menu${dropdown ? '-show' : ''}`}>
                                <ul className="Dropdown-menu-list">
                                    <li className="Dropdown-menu-item">
                                        <span>xuanthinh2405</span>
                                    </li>
                                    <li className="Dropdown-menu-item">
                                        <i class="fas fa-user-circle"></i>
                                        <span>Thông tin tài khoản</span>
                                    </li>
                                    <li className="Dropdown-menu-item">
                                        <i class="fas fa-lock"></i>
                                        <span>Đổi mật khẩu</span>
                                    </li>
                                    <li className="Dropdown-menu-item">
                                        <i class="fas fa-sign-out-alt"></i>
                                        <span>Thoát</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
