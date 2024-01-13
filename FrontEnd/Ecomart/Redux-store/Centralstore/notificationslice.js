import { createSlice } from "@reduxjs/toolkit";
const notificationSlice=createSlice({
    name:'notification',
    initialState:{msg:null}
    ,
    reducers:{
        shownotification(state,action)
       {
        state.msg={
            msg:action.payload.msg,
            type:action.payload.type,
            open:action.payload.open
        }
       }
    }
})
export const notificationActions=notificationSlice.actions;
export default notificationSlice;