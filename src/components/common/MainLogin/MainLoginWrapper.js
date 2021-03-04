import React from "react";
import { Link } from "react-router-dom";
import Login from "templates/Login/Login";
// import LeftContent from "./LeftContent";
// import RightContent from "./RightContent";
// import ChangeLanguage from "../Main/ChangeLanguage";

const MainLoginWrapper = (props) => {
    return (
        <div className='t-login'>
            <div className="t-login_header">
                <Link>
                    <img className="logo" src="/images/logo.png" alt="logo_with_text" />
                </Link>
            </div>
            <div className="t-login_wrapper">
                <div className="t-login_wellcome">
                    <h2 className="t-login_wellcome_title">SMARTHOME</h2>
                    <p className="t-login_wellcome_des">Đến với Smart Home bạn sẽ quản lý và giám sát <br /> căn hộ thông minh.</p>
                </div>
                <div className="t-login_content_wrapper">
                    <div className="t-login_content_content">
                        {props.children}

                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainLoginWrapper;