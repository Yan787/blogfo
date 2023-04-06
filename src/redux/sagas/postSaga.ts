import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getAllPosts, setAllPosts, getSinglePost, setSinglePost, getMyPost, setMyPost } from "../reducers/postSlice";
import { AllPostsRosponse } from "./@types";
import API from "../api"
import { CardType } from "../../utils/@globalTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "../../utils/constants";
import callCheckingAuth from "./callCheckingAuth";

function* getAllPostWorker() {
    const {ok, data, problem}: ApiResponse<AllPostsRosponse> = yield call(API.getPost)
    if(ok && data) {
        yield put(setAllPosts(data.results))
    } else {
        console.warn("Error getting all Posts", problem)
    }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
    const {ok, data, problem}: ApiResponse<CardType> = yield call(API.getSignlePost, action.payload)
    if(ok && data) {
        yield put(setSinglePost(data))
    } else {
        console.warn("Error getting all Posts", problem)
    }
}

function* getMyPostWorker() {
    const {ok, data, problem, status}: ApiResponse<AllPostsRosponse> = yield callCheckingAuth(API.getMyPost) 
    if(ok && data) {
        yield put(setMyPost(data.results))
    } else if (status === 404) {
        console.log("нет постов")
    } else {
        console.warn("Error getting my posts", problem)
    }
}

export default function* postSaga() {
    yield all ([
        takeLatest(getAllPosts, getAllPostWorker),
        takeLatest(getSinglePost, getSinglePostWorker),
        takeLatest(getMyPost, getMyPostWorker),
    ])
}