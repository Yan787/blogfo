import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivateUserPayload, SignUpUserPauload } from "./@type";

const initialState = {}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUser: (_, __: PayloadAction<SignUpUserPauload>)=>{},
        activateUser: (_, __: PayloadAction<ActivateUserPayload>)=>{},
    }
})

export const {signUser, activateUser} = authSlice.actions

export default authSlice.reducer




