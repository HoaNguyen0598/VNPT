import { put, takeLatest, all, fork } from "redux-saga/effects";
import { loginAction } from '../action';
import { accountService } from "../../services/index";

export function* login(payload) {
    let { username, password, onNext } = payload.params
    try {
        const response = yield accountService.login(username, password, onNext);
        if (response.success) {
            yield put({ type: loginAction.LOGIN_SUCCESS, response })
        }
        else {
            yield put({ type: loginAction.LOGIN_FAILURE, err: response });
        }
    } catch (err) {
        yield put({ type: loginAction.LOGIN_FAILURE, err });
    }
}

export function* loginWatcher() {
    yield takeLatest(loginAction.LOGIN_REQUEST, login);
}

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
    ]);
}