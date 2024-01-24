import { createSlice } from "@reduxjs/toolkit";
const reviewslice=createSlice({
    name:'reviewslice',
    initialState:{
        reviewlist:[],
        ratingslist:[]
    },
    reducers:{
        addreview(state,action)
        {
         const data=action.payload;
         if(data.length>0)
         {
            state.reviewlist=[]
            state.ratingslist=[]
            data.map((items)=>{
                state.reviewlist.push({
                    name:items.name,
                    productimage:items.productimage,
                    comment:items.comment,
                    rating:items.rating,
                    date:items.date
                })
                state.ratingslist.push({
                    rating:items.rating
                })
            })
         }
        }
    }
})
export const ReviewActions=reviewslice.actions;
export default reviewslice;