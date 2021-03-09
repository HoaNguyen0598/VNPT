import { lazy } from "react";
import { PAGES_URL } from "./contant";

const Elements = lazy(() => import("./templates/Elements"));
const Example = lazy(() => import("./templates/Example"));
const Login = lazy(() => import("./templates/Login/Login"));
const ChangePassword = lazy(() => import("./templates/Login/ChangePassword"));
const ConfirmForgotPassword = lazy(() => import("./templates/Login/ConfirmForgotPassword"));
const ForgotPassword = lazy(() => import("./templates/Login/ForgotPassword"));
const Home = lazy(() => import("./templates/Home/index"));
const Intro = lazy(() => import("./templates/Home/Intro"));
const CreateUser = lazy(() => import("./templates/CreateUser/CreateUserPage"));
const SignIn = lazy(() => import("./templates/SignIn/SignInPage"));


const Token = lazy(() => import("./templates/Token/Token"));
const CategoryData = lazy(() => import("./templates/CategoryData/CategoryData"));
const Payment = lazy(() => import("./templates/Payment/Payment"));
const Sdk = lazy(() => import("./templates/SDK/SdkDowload"));
const Experience = lazy(() => import("./templates/Experience/Experience"));

const MAIN = [
    {
        path: "/dashboard",
        component: Home,
        title: "bảng điều khiển",
        isBreadcrumb: true,
        isSidebar: true,
    },
    {
        path: "/element",
        component: Elements,
        title: "Elements",
    },
    {
        path: "/element/example",
        component: Example,
        title: "Example",
    },
    {
        path: PAGES_URL.intro,
        component: Intro,
        title: "Intro",
    },
    {
        path: "/user/create",
        component: CreateUser,
        title: "Tạo mới người dùng",
    },
    {
        path: PAGES_URL.signin,
        component: SignIn,
        title: "SignIn",
    },
    {
        path: "/token",
        component: Token,
        title: "Quản lý Token",
        isBreadcrumb: true,
        isSidebar: true,
    }, {
        path: "/category",
        component: CategoryData,
        title: "Gói cước",
        isBreadcrumb: true,
        isSidebar: true,
    }, {
        path: "/payment-history",
        component: Payment,
        title: "Lịch sử thanh toán",
        isBreadcrumb: true,
        isSidebar: true,
    }, {
        path: "/download-sdk",
        component: Sdk,
        title: "tải SDK",
        isBreadcrumb: true,
        isSidebar: true,
    }, {
        path: "/experience",
        component: Experience,
        title: "trải nghiệm ekyc web",
        isBreadcrumb: true,
        isSidebar: true,
    },
];

const GUESTS = [
    {
        "path": PAGES_URL.login,
        "component": Login
    },
    {
        "path": PAGES_URL.forgot_password,
        "component": ForgotPassword
    },
    {
        "path": PAGES_URL.confirm_forgot_password,
        "component": ConfirmForgotPassword
    },
    {
        "path": PAGES_URL.change_password,
        "component": ChangePassword
    },
]

const getPathList = (DATA) => {
    var list = []
    for (var i = 0; i < DATA.length; i++) {
        if (DATA[i]) {
            list.push(DATA[i].path)
        }
    }
    return list
}

export { MAIN, GUESTS, getPathList };

