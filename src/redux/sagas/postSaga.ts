import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getAllPosts, setAllPosts, getSinglePost, setSinglePost } from "../reducers/postSlice";
import { AllPostsRosponse } from "./@types";
import API from "../api"
import { CardType } from "../../utils/@globalTypes";
import { PayloadAction } from "@reduxjs/toolkit";

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

export default function* postSaga() {
    yield all ([
        takeLatest(getAllPosts, getAllPostWorker),
        takeLatest(getSinglePost, getSinglePostWorker),
    ])
}