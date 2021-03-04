import { MODE_ENV } from "../../env/env";
import { authHeader, CONTENT_TYPE, getHeader, getUrl, handleRequest, handleRequestBinary, postWithFormData } from "./lib.js";

export const LIMIT_RECORD = 6;
export const LIMIT_LISTLOAN = 12;
let DOMAIN = "";
if (process.env.TARGET_ENV === "prod") {
    DOMAIN = MODE_ENV.prod;
    DOMAIN.api = MODE_ENV.prod.api;
} else if (process.env.TARGET_ENV === "dev") {
    DOMAIN = MODE_ENV.dev;
    DOMAIN.api = MODE_ENV.dev.api;
} else if (process.env.TARGET_ENV === "sta") {
    DOMAIN = MODE_ENV.sta;
    DOMAIN.api = MODE_ENV.sta.api;
} else {
    DOMAIN = MODE_ENV.local;
    DOMAIN.api = "";
    DOMAIN.cloudapi = "";
}

console.log("********************");
console.log("---TARGET_ENV:", process.env.TARGET_ENV);
console.log("---DOMAIN:", DOMAIN.api);
console.log("********************");

let PREFIX = "/api/";

export default {
    CLOUD_SERVER_PATH: DOMAIN.cloudapi + "/cdn/sunnyworld-super-dev/",
    CLOUD_SERVER_ACCESS_KEY: "sunnyworld-super-dev",
    CLOUD_SERVER_SECRET_KEY: "qYvPdCC?4xDB@8Wr",
    LIMIT: 10,

    //EXAMPLE
    EXAMPLE_LIST: DOMAIN.api + PREFIX + "main_web/v1/news/",

    //CLOUD FILE UPLOAD
    CLOUD_FILE_UPLOAD: DOMAIN.api + PREFIX + "bank/v1/file/upload/",

    //LOGIN
    LOGIN: DOMAIN.api + PREFIX + "bank/v1/login/",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,
    postWithFormData,

    CONTENT_TYPE,
};
