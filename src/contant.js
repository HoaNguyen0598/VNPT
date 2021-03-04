import { translate } from "./functions/Utils";
import moment from 'moment';

export const NOTIFICATION_TYPE = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

export const STATUS_UPDATE = {
    INIT: 0,
    SUCCESS: 1,
    FAILURE: 2
}

export const PAGES_URL = {
    login: '/login',
    forgot_password: '/forgot-password',
    confirm_forgot_password: '/confirm-forgot-password',
    change_password: '/change-password',
    intro: '/intro',
    signin: '/signin',
}

const LOADING_ADS = false;
const IMAGE_URL = "../";
const IMAGE_LOGO = "../images/default_image_minerva.png";
const PHONE_NUMBER = "1900 - 123 - 456";
const EMAIL = "info@minerva.vn";
const ADDRESS = "119 Pasteur, Ward 6, District 3, HCMC";
const TIMEOUT_ADS = 10000;
const CURRENCY_UNIT = "VND";
const MOBILE_WIDTH = 767;
const MAP_KEYS = "AIzaSyDZt7EWQR3cI-a_0to4VT2JVcF-c7ti6Ro";

const UPLOAD_URL = {
    USER_AVATAR_URL: "user/avatar/",
};

const FILE_CONTENT_TYPE = {
    DEFAULT: "application/octet-stream",
    PDF: "application/pdf",
    PNG: "image/png",
    JPEG: "image/jpeg",
    JPG: "image/jpg",
    GIF: "image/gif",
    DOC: "application/msword",
    DOCX:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    XLS: "application/vnd.ms-excel",
    XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    DWG: "image/vnd.dwg",
};

const UPLOAD_ACCEPT_TYPE = {
    DOCUMENT: 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/pdf, image/*',
    IMAGE: 'image/*',
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // Max file size 10M
//-------------------------------------------------------------------------------

const RULES = {
    require: {
        form: (e) => {
            if (e) {
                return [
                    {
                        required: true,
                        message: translate("missing_infomation"),
                    },
                ];
            }
            return [
                {
                    required: true,
                    message: translate("missing_infomation"),
                },
            ];
        },
        type: "text",
    },
    text: {
        form: (e) => {
            if (e) {
                return [
                    {
                        required: true,
                        whitespace: true,
                        message: translate("missing_infomation"),
                    },
                ];
            }
            return [
                {
                    required: true,
                    whitespace: true,
                    message: translate("missing_infomation"),
                },
            ];
        },
        type: "text",
    },
    identity: {
        form: (e) => {
            if (e) {
                return [
                    {
                        required: true,
                        whitespace: true,
                        message: translate(e),
                    },
                    {
                        min: 9,
                        max: 12,
                        message: translate("identity_length"),
                    },
                ];
            }
            return [
                {
                    required: true,
                    whitespace: true,
                    message: translate("missing_infomation"),
                },
                {
                    min: 9,
                    max: 12,
                    message: translate("identity_length"),
                },
            ];
        },

        type: "text",
    },
    max12: {
        form: (e) => [
            ({ }) => ({
                validator: (_rule, value) => {
                    if (value) {
                        if (parseInt(value) < 0 || parseInt(value) > 11) {
                            return Promise.reject(translate(e));
                        } else {
                            return Promise.resolve();
                        }
                    } else {
                        return Promise.resolve();
                    }
                },
            }),
        ],
    },
    number: {
        form: (e) => {
            if (e) {
                return [
                    {
                        required: true,
                        message: translate(e),
                    },
                ];
            }
            return [
                {
                    required: true,
                    message: translate("missing_infomation"),
                },
            ];
        },
        type: "number",
    },
    email: {
        form: (e) => {
            if (e) {
                return [
                    {
                        required: true,
                        whitespace: true,
                        message: translate("missing_infomation"),
                    },
                    {
                        type: "email",
                        message: translate((e = "invalid_email")),
                    },
                ];
            } else {
                return [
                    {
                        required: true,
                        whitespace: true,
                        message: translate("missing_infomation"),
                    },
                    {
                        type: "email",
                        message: translate("invalid_email"),
                    },
                ];
            }
        },
        type: "email",
    },
    phone: {
        form: [
            ({ }) => ({
                validator: (rule, value) => {
                    if (value) {
                        if (value[0] != 0) {
                            return Promise.reject(translate("phone_error"));
                        } else if (value[1] == 0) {
                            return Promise.reject(translate("phone_error"));
                        }
                        else {
                            if (value.length != 10) {
                                const mess = translate("phone_length");
                                return Promise.reject(mess);
                            }
                        }
                        return Promise.resolve();
                    } else {
                        return Promise.reject(translate("missing_infomation"));
                    }
                },
            }),
        ],
        type: "number",
    },
    password: {
        form: [
            {
                required: true,
                whitespace: true,
                message: translate("missing_infomation"),
            },
            {
                min: 8,
                message: translate("new_password_must_have_at_least_8_letters"),
            },
            {
                max: 25,
                message: translate("new_password_cannot_exceed_25_letters"),
            },
        ],
    },

    checkBox: {
        form: (checked) => [
            ({ }) => ({
                validator: (rule, value) => {
                    if (checked) {
                        if (value == "" || !value) {
                            return Promise.reject(translate("missing_infomation"));
                        } else {
                            return Promise.resolve();
                        }
                    } else {
                        return Promise.resolve();
                    }
                },
            }),
        ],
    },
    birthday: {
        form: (e) => [
            ({ }) => ({
                validator: (_rule, value) => {
                    if (value) {
                        if (moment().diff(value, 'years', false) < 16) {
                            return Promise.reject(translate('date_of_birth_not_valid'));
                        } else {
                            return Promise.resolve();
                        }
                    } else {
                        return Promise.reject(translate('missing_infomation'));
                    }
                },
            }),
        ],
    },
    passportID: {
        form: (e) => [
            ({ }) => ({
                validator: (_rule, value) => {
                    if (value) {
                        if (Object.keys(value).length === 8 || Object.keys(value).length === 9 || Object.keys(value).length === 11) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject(translate(e));
                        }
                    } else {
                        return Promise.reject(translate('missing_infomation'));
                    }
                },
            }),
        ],
    },
    issueDate: {
        form: (e) => [
            ({ }) => ({
                validator: (_rule, value) => {
                    if (value) {
                        if (moment(value).isAfter(new Date())) {
                            return Promise.reject(translate(e));
                        } else {
                            return Promise.resolve();
                        }
                    } else {
                        return Promise.reject(translate('missing_infomation'));
                    }
                },
            }),
        ],
    },
    inputPercent: {
        form: (e) => [
            ({ }) => ({
                validator: (_rule, value) => {
                    if (value) {
                        if (value < 0) {
                            return Promise.reject(translate('value_must_be_greater_than_or_equal_to_0'));
                        }
                        else if (value >= 100) {
                            return Promise.reject(translate('value_must_be_less_than_or_equal_to_100'));
                        }
                        else {
                            return Promise.resolve();
                        }
                    } else {
                        return Promise.reject(translate('missing_infomation'));
                    }
                },
            }),
        ],
        type: "number",
    }
};

const SIDEBAR_MENU_DATA = [
    {
        id: 1,
        label: 'dashboard',
        iconName: 'la-folder',
        url: '/',
    },
    {
        id: 2,
        label: 'list_project',
        iconName: 'la-clipboard-list',
        url: '/projects',
    },
    {
        id: 3,
        label: 'list_profile',
        iconName: 'la-user-alt',
        url: PAGES_URL.profiles_project,
    },
    {
        id: 4,
        label: 'bank_policy',
        iconName: 'la-landmark',
        url: '/bank-policy',
    },
    {
        id: 5,
        label: 'brief_approvals',
        iconName: 'la-clipboard-check',
        children: [
            {
                id: 53,
                label: 'profiles_additional',
                iconName: 'la-check-square',
                url: '/profiles-additional/project',
            },
            {
                id: 52,
                label: 'examination_profile',
                iconName: 'la-file-archive',
                url: PAGES_URL.examination,
            },
            {
                id: 51,
                label: 'approval_history',
                iconName: 'la-history',
                url: '/approval-history',
            },
        ]
    },
    {
        id: 6,
        label: 'general_news',
        iconName: 'la-newspaper',
        url: '/news',
    },
]

const LANGUAGE_OPTIONS = [
    {
        id: 1,
        label: 'vietnam',
        value: "vi",
        image: "/images/lang_vi.jpg",
    },
    {
        id: 2,
        label: 'english',
        value: "en",
        image: "/images/lang_en.jpg",
    },
    {
        id: 3,
        label: 'zh_hans',
        value: "zh",
        image: "/images/lang_zh-hans.jpg",
    },
]



const APPROVAL_HISTORY_SORT_OPTIONS = [
    {
        id: 1,
        label: 'newest',
        value: 'newest',
    },
    {
        id: 2,
        label: 'oldest',
        value: 'oldest',
    },
    {
        id: 3,
        label: 'today',
        value: 'today',
    },
]

const DEFAULT_APPROVAL_HISTORY_SORT_OPTION = 'newest';
const CONTRACT_STATUS_ALLOW_APPROVED = 5;

const MAP = {
    MAX_BOUNDS: [[-180, -60], [95, 88]],
}

export {
    IMAGE_URL,
    IMAGE_LOGO,
    PHONE_NUMBER,
    MOBILE_WIDTH,
    MAP_KEYS,
    EMAIL,
    ADDRESS,
    RULES,
    TIMEOUT_ADS,
    LOADING_ADS,
    UPLOAD_URL,
    UPLOAD_ACCEPT_TYPE,
    FILE_CONTENT_TYPE,
    CURRENCY_UNIT,
    SIDEBAR_MENU_DATA,
    LANGUAGE_OPTIONS,
    APPROVAL_HISTORY_SORT_OPTIONS,
    CONTRACT_STATUS_ALLOW_APPROVED,
    DEFAULT_APPROVAL_HISTORY_SORT_OPTION,
    MAX_FILE_SIZE,
    MAP,
};