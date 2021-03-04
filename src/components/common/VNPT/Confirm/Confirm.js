import React from "react";

const Confirm = ({ src, title }) => {
    return (
        <div className="Confirm">
            <div className="Confirm_check"></div>
            <p className="Confirm_title">Tôi không phải là người máy</p>
            <div className="Confirm_right">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" />
                <div className="Confirm_right-cap">reCAPTCHA</div>
                <p>Bảo mật - Điều khoản</p>
            </div>
        </div>
    )
}

export default Confirm;