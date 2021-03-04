// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { exampleService } from "../../services";
import { examAction } from '../action';


export function* exampleList(payload) {
    try {
        const response = yield exampleService.list(payload.params);
        response.success
            ? yield put({ type: examAction.EXAMPLE_LOAD_LIST_SUCCESS, response })
            : yield put({ type: examAction.EXAMPLE_LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: examAction.EXAMPLE_LOAD_LIST_FAILURE, err });
    }
}


export function* exampleListlWatcher() {
    yield takeLatest(examAction.EXAMPLE_LOAD_LIST_REQUEST, exampleList);
}

export default function* rootSaga() {
    yield all([
        fork(exampleListlWatcher),
    ]);
}