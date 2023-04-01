import { all, call, put, takeLatest } from "redux-saga/effects"
import { ApiResponse } from "apisauce"
import { activateUser, getUserInfo, logoutUser, setLoggedIn, setUserInfo, signInUser, signUser } from "../reducers/authSlice"
import API from "../api"
import { PayloadAction } from "@reduxjs/toolkit"
import { ActivateUserPayload, SignInUserPayload, SignUpUserPauload } from "../reducers/@type"
import { getUserInfoResponse, SignInResponse, signUpUserResponse } from "./@types"
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../utils/constants"

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



function* signInUserWorker(actions: PayloadAction<SignInUserPayload>) {
    const {data, callback} = actions.payload
    const {ok, problem, data: responseDate}: ApiResponse<SignInResponse> = yield call(API.signInUser, data)
    if(ok && responseDate) {
        localStorage.setItem(ACCESS_TOKEN_KEY, responseDate?.access)
        localStorage.setItem(REFRESH_TOKEN_KEY, responseDate?.refresh)
        callback()
        yield put(setLoggedIn(true))
    } else {
        console.warn("Error sign acti user", problem)
    }
}
function* logoutUserWorker(){
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    yield put(setLoggedIn(false))
}



function* getUserInfoWorker() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
    if(accessToken) {
        const {ok, problem, data}: ApiResponse<getUserInfoResponse> = yield call(API.getUserInfo, accessToken)
        if(ok && data) {
            yield put(setUserInfo(data))
        } else {
            console.warn("Error sign in user", problem)
        }
    }
}


export default function* postSaga() {
    yield all ([
        takeLatest(signUser, signUpUserWorker),
        takeLatest(activateUser, activateUserWorker),
        takeLatest(signInUser, signInUserWorker),
        takeLatest(logoutUser, logoutUserWorker),
        takeLatest(getUserInfo, getUserInfoWorker),
    ])
}


