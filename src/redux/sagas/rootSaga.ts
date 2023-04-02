import postSaga from "./postSaga";
import { all } from "redux-saga/effects"

export default function* rootSaga() {
    yield all ([postSaga()])
}


