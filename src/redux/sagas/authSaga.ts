import { ApiResponse } from "apisauce"
import { all, call, takeLatest } from "redux-saga/effects"
import { activateUser, signUser } from "../reducers/authSlice"
import API from "../api"
import { PayloadAction } from "@reduxjs/toolkit"
import { ActivateUserPayload, SignUpUserPauload } from "../reducers/@type"
import { signUpUserResponse } from "./@types"

function* signUpUserWorker(actions: PayloadAction<SignUpUserPauload>) {
    const {data, callback} = actions.payload
    const {ok, problem}: ApiResponse<signUpUserResponse> = yield call(API.signUpUser, data)
    if(ok) {
        callback()
    } else {
        console.warn("Error sign up user", problem)
    }
}

function* activateUserWorker(actions: PayloadAction<ActivateUserPayload>) {
    const {data, callback} = actions.payload
    const {ok, problem}: ApiResponse<undefined> = yield call(API.activateUser, data)
    if(ok) {
        callback()
    } else {
        console.warn("Error sign acti user", problem)
    }
}


export default function* postSaga() {
    yield all ([
        takeLatest(signUser, signUpUserWorker),
        takeLatest(activateUser, activateUserWorker),
    ])
}


