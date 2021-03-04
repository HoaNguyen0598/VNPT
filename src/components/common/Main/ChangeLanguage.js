import React from 'react';
import { LANGUAGE_OPTIONS } from 'contant';
import { useTranslation } from 'react-i18next';
import useClickOutside from 'hooks/useClickOutside';
import { mapModifiers } from 'functions/Utils';


const getDefaultLangObj = () => {
    const langCode = JSON.parse(localStorage.getItem('language'));
    const res = LANGUAGE_OPTIONS.filter(element => {
        return element.value == langCode
    });
    return res[0];
}

const ChangeLanguage = (props) => {
    const { minimize } = props;
    const className = mapModifiers('rc_language', minimize ? 'minimize' : undefined);
    const { t: translate, i18n } = useTranslation();
    const { ref, isVisible, setIsVisible } = useClickOutside(false);
    const languageCurrent = getDefaultLangObj();

    const onChangeLanguage = (lang) => {
        i18n.changeLanguage(lang.value);
        setIsVisible(false);
        localStorage.setItem('language', JSON.stringify(lang.value));
        window.location.reload();
    }
    return (
        <div className={className}>
            <div
                className="rc_language_selected"
                onClick={() => setIsVisible(!isVisible)}
            >
                <figure className="rc_language_selected_icon">
                    <img className="w-100" src={languageCurrent.image} alt="homepage" />
                </figure>
                <span className="arrow">
                    <i class="fa fa-angle-down"></i>
                </span>
            </div>
            <div
                ref={ref}
                className={`rc_language_dropdown dropdown-menu ${isVisible ? 'show' : ''}`}
            >
                {LANGUAGE_OPTIONS.map((lan) => {
                    if (lan.value !== languageCurrent.value) {
                        return (
                            <div
                                className="rc_language_dropdown_item"
                                onClick={() => onChangeLanguage(lan)}
                                key={lan.id}
                            >
                                <div className="rc_language_dropdown_item_image">
                                    <img src={lan.image} alt="language" />
                                </div>
                                <span className="rc_language_dropdown_item_label">
                                    {translate(lan.label)}
                                </span>
                            </div>
                        )
                    }
                    return null;
                }
                )}
            </div>
        </div>
    );
}

export {
    getDefaultLangObj
}

export default ChangeLanguage;