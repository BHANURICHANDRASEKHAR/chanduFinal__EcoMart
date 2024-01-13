import { createSlice } from "@reduxjs/toolkit";
const userdetaileslice=createSlice({
    name:'userslice',
    initialState:{userdetails:[],count:0},
    reducers:{
        adduserdetails(state,action)
        {
            const data=action.payload
            if(state.count==0)
            {
                state.userdetails.push({
                    name:data.name,
                    email:data.email,
                    phnumber:data.phnumber
                })
                state.count+=1
            }
        }
        
    }
})
export const userdetailsActions=userdetaileslice.actions;
export default userdetaileslice;    