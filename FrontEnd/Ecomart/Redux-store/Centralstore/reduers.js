import { configureStore,createSlice } from "@reduxjs/toolkit";
const userslice=createSlice({
    name:'auth',
    initialState:{
        userauth:false,
    },
    reducers:{
        login(state)
        {
            state.userauth=true;
        },
        logout(state)
        {
            state.userauth=false;
        }
    }
})
export const AuthActions=userslice.actions;
export default userslice;