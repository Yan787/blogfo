import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./reducers/themeSlice"
import modalReducer from "./reducers/postSlice";

const store = configureStore({
    reducer: {
        theme: themeReducers,
        post: modalReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store