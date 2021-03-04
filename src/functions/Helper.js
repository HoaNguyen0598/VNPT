import { FILE_CONTENT_TYPE } from 'contant'
import { PROFILE_DOCUMENT_TYPE } from 'data/customer_profile'
import moment from 'moment'
import { PROJECT_SALE_GROUP } from '../data/project_sale'
// # Trang thai của du an ben Sale
// PROJECT_STATUS_WAITING_SALE = 1     # Chờ bán
// PROJECT_STATUS_COMING_SOON = 2      # Sắp bán
// PROJECT_STATUS_ON_SALE = 3          # Đang bán
// PROJECT_STATUS_SOLD = 4             # Đã bán
// PROJECT_STATUS_STOP_SELLING = 5     # Ngưng bán


/**
 * PROJECT_STATUS
 * status of project
 */
export const PROJECT_STATUS = [
    { id: 0, label: "project_status_all", value: '0', classStatus: 'bank_status--bg_01', icon: '', type: 'status_01', color: '' },
    { id: 1, label: "project_status_new", value: '1', classStatus: 'bank_status--bg_01', icon: 'las la-book', type: 'status_01', color: '#219dfd' },
    { id: 2, label: "project_status_pending", value: '2', classStatus: 'bank_status--bg_02', icon: 'las la-hourglass-end', type: 'status_02', color: '#6d30ab' },
    { id: 3, label: "project_status_inprocess", value: '3', classStatus: 'bank_status--bg_03', icon: 'las la-clipboard-check', type: 'status_03', color: '#1ABC9C' },
    { id: 4, label: "project_status_stop", value: '4', classStatus: 'bank_status--bg_04', icon: 'las la-backspace', type: 'status_04', color: '#399b54' },
    { id: 5, label: "project_status_finished", value: '5', classStatus: 'bank_status--bg_05', icon: 'las la-hand-holding-usd', type: 'status_05', color: '#F33652' },
]

/**
 * LOAN_PROFILE_STATUS
 * status of page loan profile
 * 
 * getStatusLoanProfile (func get item status)
 */

// # trạng thái duyệt hồ sơ ngân hàng.
// CUSTOMER_LOAN_PROFILE_STATUS_NEW = 1
// CUSTOMER_LOAN_PROFILE_STATUS_PENDING = 2  # Chờ duyệt
// CUSTOMER_LOAN_PROFILE_STATUS_DENY = 3   # Hủy
// CUSTOMER_LOAN_PROFILE_STATUS_LOAN_FINISHED =  4 # Hoàn Thành

// const CUSTOMER_LOAN_PROFILE_STATUS = {
//     CUSTOMER_LOAN_PROFILE_STATUS_NEW: _('New'),
//     CUSTOMER_LOAN_PROFILE_STATUS_PENDING: _('Pending'),
//     CUSTOMER_LOAN_PROFILE_STATUS_DENY: _('Deny'),
//     CUSTOMER_LOAN_PROFILE_STATUS_LOAN_FINISHED: _('Loan finished'),
// }
//Type Education
// const LOAN_PROFILE_STATUS = {
//     _NEW: 1,
//     _PENDING: 2,
//     _DENY: 3,
//     _FINISHED: 4,
// }

// const CUSTOMER_LOAN_PROFILE_STATUS = {
//     [LOAN_PROFILE_STATUS._NEW]: 'loan_profile_status_new',
//     [LOAN_PROFILE_STATUS._PENDING]: 'loan_profile_status_pending',
//     [LOAN_PROFILE_STATUS._DENY]: 'loan_profile_status_deny',
//     [LOAN_PROFILE_STATUS._FINISHED]: 'loan_profile_status_finished',
// }
export const LOAN_PROFILE_STATUS = [
    { id: 0, label: "loan_profile_status_all", value: '0', classStatus: 'bank_status--bg_01', icon: '', type: 'status_01' },
    { id: 1, label: "loan_profile_status_new", value: '1', classStatus: 'bank_status--bg_01', icon: 'las la-book', type: 'status_01' },
    { id: 2, label: "loan_profile_status_pending", value: '2', classStatus: 'bank_status--bg_02', icon: 'las la-hourglass-end', type: 'status_02' },
    // { id: 3, label: "loan_profile_status_finish", value: '3', classStatus: 'bank_status--bg_03', icon: 'las la-clipboard-check', type: 'status_03' },
    // { id: 4, label: "loan_profile_status_deny", value: '4', classStatus: 'bank_status--bg_04', icon: 'las la-backspace', type: 'status_04' },
    // { id: 5, label: "loan_profile_status_approval", value: '5', classStatus: 'bank_status--bg_05', icon: 'las la-hand-holding-usd', type: 'status_05' },
    { id: 3, label: "loan_profile_status_deny", value: '3', classStatus: 'bank_status--bg_03', icon: 'las la-backspace', type: 'status_03' },
    { id: 4, label: "loan_profile_status_approval", value: '4', classStatus: 'bank_status--bg_04', icon: 'las la-clipboard-check', type: 'status_04' },
]

export const getStatusLoanProfile = (id) => {
    let x = LOAN_PROFILE_STATUS.find(e => e.id == id)
    if (x) { return x }
}

export const CURRENCY_OPTION = [
    { id: 0, label: "VND", value: 0, text: 'vietnam' },
    { id: 1, label: "USD", value: 1, text: 'us' },
    { id: 2, label: "CNY", value: 2, text: 'chinese_yuan' },
    { id: 3, label: "HKD", value: 3, text: 'hongkong_dollar' },
]

export const PROJECT_STATUS_VALUE = (value) => {
    let x = PROJECT_STATUS.find(e => e.value == value)
    if (x) { return x }
}

export const PROJECT_STATUS_ID = (id) => {
    let x = PROJECT_STATUS.find(e => e.id == id)
    if (x) { return x }
}

export const ALPHABET = [
    { id: 1, label: "A", value: 'a' },
    { id: 2, label: "B", value: 'b' },
    { id: 3, label: "C", value: 'c' },
    { id: 4, label: "D", value: 'd' },
    { id: 5, label: "E", value: 'e' },
    { id: 6, label: "F", value: 'f' },
    { id: 7, label: "G", value: 'g' },
    { id: 8, label: "H", value: 'h' },
    { id: 9, label: "I", value: 'i' },
    { id: 10, label: "J", value: 'j' },
    { id: 11, label: "K", value: 'k' },
    { id: 12, label: "L", value: 'l' },
    { id: 13, label: "M", value: 'm' },
    { id: 14, label: "N", value: 'n' },
    { id: 15, label: "O", value: 'o' },
    { id: 16, label: "P", value: 'p' },
    { id: 17, label: "Q", value: 'q' },
    { id: 18, label: "R", value: 'r' },
    { id: 19, label: "S", value: 's' },
    { id: 20, label: "T", value: 't' },
    { id: 21, label: "U", value: 'u' },
    { id: 22, label: "V", value: 'v' },
    { id: 23, label: "W", value: 'w' },
    { id: 24, label: "X", value: 'x' },
    { id: 25, label: "Y", value: 'y' },
    { id: 26, label: "Z", value: 'z' },
]
export const TYPE_PROJECT_FILTER = [
    // { id: 1, label: "All", value: 'all', style: "m_text_000000" },
    { id: 1, label: "Apartment", value: 'aparment', style: "m_text_a8c200" },
    { id: 2, label: "Office", value: 'office', style: "m_text_f35e5e" },
    { id: 4, label: "Shopping Mall", value: 'shopping_mall', style: "m_text_e9c301" },
    { id: 5, label: "Villa", value: 'villa', style: "m_text_fb9334" },
    { id: 3, label: "Supermarket", value: 'supermarket', style: "m_text_212529" },
]


export const mappingToProjectTypeFilter = (data) => {
    if (data && data.length > 0) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let item = {
                id: data[i]['type_id'] ? data[i]['type_id'] : '',
                name: data[i]['type_name'] ? data[i]['type_name'] : '',
                color: data[i]['type_color'] ? `m_text_${data[i]['type_color']}` : '',
                label: data[i]['type_name'] ? data[i]['type_name'] : '',
                value: data[i]['type_id'] ? data[i]['type_id'] : '',
            }
            arr.push(item)
        }
        return arr;
    }
}

export const getStatusProject = (id) => {
    let x = PROJECT_STATUS.find(e => e.id == id)
    if (x) { return x }
}


//mappingDataTableListLoanProfile
export const mappingTableLoanProfile = (data) => {
    if (data) {
        if (data.length > 0) {
            const arr = []
            for (let i = 0; i < data.length; i++) {
                let item = {
                    key: i,
                    stt: i + 1,
                    contractId: data[i]['contractId'],
                    loanProfileId: data[i]['loanProfileId'],
                    projectId: data[i]['projectId'],
                    id: data[i]['loanProfileCode'],
                    customer: { name: data[i]['customerName'], code: data[i]['customerCode'] },
                    product: { name: data[i]['productName'], code: data[i]['productCode'] },
                    limit: {
                        limit: data[i]['customerLoanAmount'],
                        unit: data[i]['customerLoanAmountUnit'] && `(${data[i]['customerLoanAmountUnit']})`,
                        time: data[i]['loanTerm'], timeUnit: data[i]['loanTermUnitName']
                    },
                    updateBy: { by: data[i]['updateBy'], at: data[i]['updateAt'] },
                    status: data[i]['loanProfileStatus']
                }
                arr.push(item)
            }
            return arr;
        }
    }
}
//mappingDataTableInfoDocs
export const mappingDataTableInfoDocs = (data) => {
    if (data) {
        const arr = []
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    key: i,
                    stt: i + 1,
                    documentId: data[i].documentId,
                    documentName: data[i].documentName,
                    documentType: data[i].documentType,
                    update: { updateBy: data[i].updateBy, updateAt: data[i].updateAt },
                    listFile: data[i].listFile
                }
                arr.push(obj)
            }
            return arr;
        }
    }
}
/**
 * mapping dataSoure for table listFile
 */
export const mappingDataTableListFile = (datas) => {
    let arr = [];
    const dataList = datas.listFile
    if (dataList.length > 0) {
        for (let i = 0; i < dataList.length; i++) {
            let obj = {
                key: i,
                stt: i + 1,
                file_id: dataList[i]['file_id'],
                file_name: dataList[i]['file_name'],
                update: datas.update,
                file_url: dataList[i]['file_url']
            }
            arr.push(obj)
        }
        return arr;
    }
}
//Gender
export const GENDER = {
    MALE: 1,
    FEMALE: 2,
    OTHER: 3
};

export const GENDER_TYPE = {
    [GENDER.MALE]: 'gender_male',
    [GENDER.FEMALE]: 'gender_famale',
    [GENDER.OTHER]: 'gender_other',
};

export const getGenderDisplay = (gender) => {
    if (gender === GENDER.MALE) {
        return 'gender_male';
    } else if (gender === GENDER.FEMALE) {
        return 'gender_famale';
    } else if (gender === GENDER.OTHER) {
        return 'gender_other';
    } else {
        return null;
    }
}
//Marital type
const TYPE_MARITAL = {
    MARRIED: 1,
    SINGLE: 2,
    DIVORCE: 3,
    OTHERS: 4,
}

export const PROFILE_MARITAL_TYPE = {
    [TYPE_MARITAL.MARRIED]: 'profile_marital_type_married',
    [TYPE_MARITAL.SINGLE]: 'profile_marital_type_single',
    [TYPE_MARITAL.DIVORCE]: 'profile_marital_type_divorce',
    [TYPE_MARITAL.OTHERS]: 'profile_marital_type_others',
}
export const getDislayMaritalType = (id) => {
    return PROFILE_MARITAL_TYPE[id] || ""
}

//Type Education
const TYPE_EDUCATION = {
    UNIVERSITY: 1,
    COLLEGE: 2,
    INTERMEDIATE: 3,
    HIGH_SCHOOL: 4,
}

export const PROFILE_EDUCATION_TYPE = {
    [TYPE_EDUCATION.UNIVERSITY]: 'profile_education_type_university',
    [TYPE_EDUCATION.COLLEGE]: 'profile_education_type_college',
    [TYPE_EDUCATION.INTERMEDIATE]: 'profile_education_type_intermediate',
    [TYPE_EDUCATION.HIGH_SCHOOL]: 'profile_education_type_high_school',
}
export const getDislayEducationType = (id) => {
    return PROFILE_EDUCATION_TYPE[id] || ""
}

//Type Education
const TYPE_OWNER = {
    OWNERSHIP: 1,
    WITH_PARENTS: 2,
    RENT: 3,
    OTHERS: 4,
}

export const PROFILE_ESTATE_OWNER_TYPE = {
    [TYPE_OWNER.OWNERSHIP]: 'profile_owner_type_ownership',
    [TYPE_OWNER.WITH_PARENTS]: 'profile_owner_type_with_parents',
    [TYPE_OWNER.RENT]: 'profile_owner_type_rent',
    [TYPE_OWNER.OTHERS]: 'profile_owner_type_others',
}
export const getDislayOwnerType = (id) => {
    return PROFILE_ESTATE_OWNER_TYPE[id] || ""
}
//Type Bussiness
const TYPE_BUSSINESS = {
    STATE_AGENCIES: 1,
    INDIVIDUAL: 2,
    JOINT_STOCK_LIMITED: 3,
    OTHERS: 4,
}

export const PROFILE_BUSINESS_TYPE = {
    [TYPE_BUSSINESS.STATE_AGENCIES]: 'profile_bussiness_type_state_agencies',
    [TYPE_BUSSINESS.INDIVIDUAL]: 'profile_bussiness_type_individual',
    [TYPE_BUSSINESS.JOINT_STOCK_LIMITED]: 'profile_bussiness_type_joint_stock_limited',
    [TYPE_BUSSINESS.OTHERS]: 'profile_bussiness_type_others',
}
export const generateOptions = (obj) => {
    let optionList = [];
    for (const property in obj) {
        optionList.push({
            id: parseInt(property),
            label: obj[property],
            value: property,
        })
    }
    return optionList;
}
export const getDislayBussinessType = (id) => {
    return PROFILE_BUSINESS_TYPE[id] || ""
}


// # TODO: Vi tri cong tac
// PROFILE_POSITION_JOB_TYPE_MANAGER = 1  # Cán bộ quản lý/ Chủ doanh nghiệp
// PROFILE_POSITION_JOB_TYPE_STAFF = 2  # Cán bộ CNV
// PROFILE_POSITION_JOB_TYPE_WORKER = 3  # Công nhân/Tự kinh doanh
// PROFILE_POSITION_JOB_TYPE_PART_TIME = 4  # Lao động thời vụ/ Thất nghiệp/ Nghỉ hưu

//Type Position Job
const POSITION_JOB_TYPE = {
    MANAGER: 1,
    STAFF: 2,
    WORKER: 3,
    PART_TIME: 4,
}

export const PROFILE_POSITION_JOB_TYPE = {
    [POSITION_JOB_TYPE.MANAGER]: 'profile_possiton_job_type_manager',
    [POSITION_JOB_TYPE.STAFF]: 'profile_possiton_job_type_staff',
    [POSITION_JOB_TYPE.WORKER]: 'profile_possiton_job_type_worker',
    [POSITION_JOB_TYPE.PART_TIME]: 'profile_possiton_job_type_part_time',
}
export const getDislayPossitionJobType = (id) => {
    return PROFILE_POSITION_JOB_TYPE[id] || ""
}

// # TODO: Hop dong lao dong
// PROFILE_LABOR_CONTRACT_TYPE_6_MONTH = 1  # Dưới 6 tháng/ không có hợp đồng lao động
// PROFILE_LABOR_CONTRACT_TYPE_6_MONTH_1_YEAR = 2  # 6 tháng đến 1 năm
// PROFILE_LABOR_CONTRACT_TYPE_1_3_YEAR = 3  # 1 đến 3 năm
// PROFILE_LABOR_CONTRACT_TYPE_3_YEAR = 4  # Trên 3 năm
// PROFILE_LABOR_CONTRACT_TYPE_NO_LIMIT = 5  # Không xác định thời hạn
// PROFILE_LABOR_CONTRACT_TYPE_OWNERSHIP = 6  # Tự làm chủ

const LABOR_CONTRACT_TYPE = {
    _6_MONTH: 1,
    _6_MONTH_1_YEAR: 2,
    _1_3_YEAR: 3,
    _3_YEAR: 4,
    _NO_LIMIT: 5,
    _OWNERSHIP: 6
}

export const PROFILE_LABOR_CONTRACT_TYPE = {
    [LABOR_CONTRACT_TYPE._6_MONTH]: 'profile_labor_contract_type_6_month',
    [LABOR_CONTRACT_TYPE._6_MONTH_1_YEAR]: 'profile_labor_contract_type_6_month_1_year',
    [LABOR_CONTRACT_TYPE._1_3_YEAR]: 'profile_labor_contract_type_1_3_year',
    [LABOR_CONTRACT_TYPE._3_YEAR]: 'profile_labor_contract_type_3_year',
    [LABOR_CONTRACT_TYPE._NO_LIMIT]: 'profile_labor_contract_type_no_limit',
    [LABOR_CONTRACT_TYPE._OWNERSHIP]: 'profile_labor_contract_type_ownership',
}
export const getDislayLaborContractType = (id) => {
    return PROFILE_LABOR_CONTRACT_TYPE[id] || ""
}

// # TODO: Hinh thuc tra luong
// PROFILE_PAY_TYPE_ATM = 1  # Qua tài khoản/ thẻ ATM
// PROFILE_PAY_TYPE_CASH = 2  # Tiền mặt
// PROFILE_OTHERS = 3  # Tài khoản ATM ngân hàng khác

const PAY_TYPE = {
    ATM: 1,
    CASH: 2,
    OTHERS: 3
}

export const PROFILE_PAY_TYPE = {
    [PAY_TYPE.ATM]: 'profile_pay_type_atm',
    [PAY_TYPE.CASH]: 'profile_pay_type_cash',
    [PAY_TYPE.OTHERS]: 'profile_pay_type_others',
}
export const getDislayPayType = (id) => {
    return PROFILE_PAY_TYPE[id] || ""
}
// # TODO: Loai tai lieu
// PROFILE_DOCUMENT_TYPE_CUSTOMER_GENERAL_INFORMATION = 3  # Thông tin chung
// PROFILE_DOCUMENT_TYPE_CUSTOMER_JOB_INCOME = 4  # Công tác và thu nhập
// PROFILE_DOCUMENT_TYPE_CUSTOMER_ASSET_DEBT = 5  # Tài sản và khoản đã vay
// PROFILE_DOCUMENT_TYPE_LOAN_PROFILE = 6  # Hồ sơ vay

export const getDislayProfileDocumentType = (id) => {
    return PROFILE_DOCUMENT_TYPE[id] || ""
}

// # TODO: Han muc vay
// LOAN_TYPE_AMORTIZED_LOAN = 1  # Vay dư nợ giảm dần
// LOAN_TYPE_FIXED_ANNUITY_LOAN = 2  # Vay trả đều
const LOAN_TYPE = {
    AMORTIZED_LOAN: 1,
    FIXED_ANNUITY_LOAN: 2
}

export const PROFILE_LOAN_TYPE = {
    [LOAN_TYPE.AMORTIZED_LOAN]: 'profile_loan_type_amortized_loan',
    [LOAN_TYPE.FIXED_ANNUITY_LOAN]: 'profile_loan_type_fixed_annuity_loan',
}

// # NEWS STATUS
const NEWS_STATUS_KEY = {
    NEWS_STATUS_PENDING: 1,
    NEWS_STATUS_DENY: 2,
    NEWS_STATUS_ACTIVE: 3,
    NEWS_STATUS_INACTIVE: 4,
}

export const NEWS_STATUS = {
    [NEWS_STATUS_KEY.NEWS_STATUS_PENDING]: 'pending',
    [NEWS_STATUS_KEY.NEWS_STATUS_DENY]: 'deny',
    [NEWS_STATUS_KEY.NEWS_STATUS_ACTIVE]: 'active',
    [NEWS_STATUS_KEY.NEWS_STATUS_INACTIVE]: 'inactive',
}

export const getDislayLoanType = (id) => {
    return PROFILE_LOAN_TYPE[id] || ""
}
/**
 * func getDisplayDateTime()
 * format dateTime for DatePicker (YYYY/MM/DD) 
 */
export const getDisplayDateTime = (dateTime) => {
    // const lang = getLocalStore('language');
    // console.log({datassssss : moment(dateTime, 'MM-DD-YYYY')});
    // if(dateTime == "Invalid date"){
    //     console.log('Invalid date');
    //     return null;
    // }
    // else {
    //     if(lang==='vi') {
    return moment(dateTime, 'YYYY-MM-DD');
    //     } else {
    //         return moment(dateTime, 'MM-DD-YYYY');
    //     }
    // }
}

export const getTypeProjectSale = (id) => {
    const item = PROJECT_SALE_GROUP[id]
    return item;
}
// mapping list Currency Unit
export const mappingListCurrencyUnit = (data) => {
    if (data) {
        const arr = [];
        for (let i = 0; i < data.length; i++) {
            let obj = {
                id: data[i].id,
                value: data[i].code,
                label: data[i].code,
                flag: data[i].default_flag,
            }
            arr.push(obj)
        }
        return arr;
    }
}

export function createMarkup(html) {
    return { __html: html };
}

export function isValidDocumentType(type) {
    return type === FILE_CONTENT_TYPE.PDF
        || type === FILE_CONTENT_TYPE.DOC
        || type === FILE_CONTENT_TYPE.DOCX
        || type === FILE_CONTENT_TYPE.PNG
        || type === FILE_CONTENT_TYPE.JPEG
        || type === FILE_CONTENT_TYPE.JPG
        || type === FILE_CONTENT_TYPE.GIF
        || type === FILE_CONTENT_TYPE.DWG
        || type === FILE_CONTENT_TYPE.GIF
        || type === FILE_CONTENT_TYPE.XLS
        || type === FILE_CONTENT_TYPE.XLSX;
}

export function isValidImageType(type) {
    return type === FILE_CONTENT_TYPE.PNG
        || type === FILE_CONTENT_TYPE.JPEG
        || type === FILE_CONTENT_TYPE.JPG
        || type === FILE_CONTENT_TYPE.GIF
        || type === FILE_CONTENT_TYPE.DWG;
}