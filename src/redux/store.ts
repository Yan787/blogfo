import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./reducers/themeSlice"
import modalReducer from "./reducers/postSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";
import authReducer from "./reducers/authSlice";

const middleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        theme: themeReducers,
        post: modalReducer,
        auth: authReducer,
    },
    middleware: [middleware]
})

middleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
