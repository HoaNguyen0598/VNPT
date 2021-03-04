import React from "react";
import { useTranslation } from "react-i18next";

const LeftContent = (props) => {
    const { t: translate } = useTranslation(['login'])
    return (
        <div class="m_login--left">
            <figure class="m_login--logo"><img src="/images/logo_full_name.svg" alt="Minerva" /></figure>
            <div class="content">
                <p class="main-title">{translate('login_welcome')}</p>
                <p class="sub-title">{translate('welcome_to_Minerva_real_estate_and_business_project_management_system')}</p>
            </div>
        </div>
    );
}

export default LeftContent;