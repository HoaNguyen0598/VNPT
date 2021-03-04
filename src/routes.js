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


const MAIN = [
    {
        path: "/",
        component: Home,
        title: "Home",
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

