import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import loginSaga from "./loginSaga";

function* allSaga() {
    yield all([
        examSaga(),
        loginSaga(),
    ]);
}

export default allSaga;
