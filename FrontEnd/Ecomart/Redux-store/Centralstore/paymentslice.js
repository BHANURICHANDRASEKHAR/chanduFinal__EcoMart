import { createSlice } from "@reduxjs/toolkit";
const paymentslice=createSlice({
    name:'paymentslice',
    initialState:{
        paymentlist:[],
        totalprce:0,
        delivarycharge:0
    },
    reducers:{
        addtocart(state,action)
        {
            console.log('jjhdjhjdhjfj')
        }
    }
})
export const PaymentSlice=paymentslice.actions;
export default paymentslice;