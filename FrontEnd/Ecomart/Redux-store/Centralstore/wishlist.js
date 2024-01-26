import { createSlice } from "@reduxjs/toolkit";
const wishlistslice=createSlice({
    name:'wishlistslice',
    initialState:{
        wishlist:[]
    }
    ,reducers:{
        addtowishlist(state,action)
        {
            state.wishlist=[];
           const wishlistdata=action.payload;
     
           wishlistdata.map((dataitems)=>{
            const {id,productimage,price,productname,status}=dataitems;
            state.wishlist.push({
            id:id,
            image:productimage,
            price:price,
            name:productname,
            status:status
            })
           })
        }
    }
})
export const WishlistActions=wishlistslice.actions;
export default wishlistslice;