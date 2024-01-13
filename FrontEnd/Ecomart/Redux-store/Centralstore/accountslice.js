import { createSlice } from "@reduxjs/toolkit";
const userdetaileslice=createSlice({
    name:'userdetaileslice',
    initialState:{userdetails:[],count:0},
    reducers:{
        adduserdetails(state,action)
        {
            const data=action.payload[0]
            console.log(data)
             const {name}=data; 
            
             if(state.count==0)
             {
                state.userdetails.push({
                    name:name,
                    email:data.mail,
                    phnumber:data.phnumber,
                    phnumber:data.phnumber,
                    firstname:data.firstname,
                    lastname:data.lastname,
                    gender:data.gender,
                })
                state.count+=1;
             }
        }
        
    }
})
export const userdetailsActions=userdetaileslice.actions;
export default userdetaileslice;    