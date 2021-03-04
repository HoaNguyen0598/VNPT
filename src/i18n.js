import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../locales/en.js';
import vi from '../locales/vi.js';
import zh from '../locales/zh.js';

let lang = JSON.parse(localStorage.getItem('language'));
// console.log('dd',lang);
if (!lang) {
    lang = 'vi';
    localStorage.setItem('language', JSON.stringify(lang));
}

// let lang = 'en';
// console.log(lang);

// the translations
const resources = {
    en: en,
    vi: vi,
    zh: zh,
};

i18n

    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: lang,
        fallbackLng: 'vi', // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })


export default i18n;


