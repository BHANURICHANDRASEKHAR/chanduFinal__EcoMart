import { configureStore } from "@reduxjs/toolkit";
import userslice,{AuthActions} from "./reduers";
import cartslice,{cartActions} from "./cart-slice";
import useraddressslice from "./useraddressslice";
import paymentslice from "./paymentslice";
import wishlistslice from "./wishlist";
import reviewslice from "../review";
import userdetaileslice from "./accountslice";
const   store=configureStore({
    reducer:{
        userslice:userslice.reducer ,
        cartslice:cartslice.reducer,
        useraddressslice:useraddressslice.reducer,
        userdetaileslice:userdetaileslice.reducer,
        reviewslice:reviewslice.reducer,
        wishlistslice:wishlistslice.reducer,
        paymentslice:paymentslice.reducer,
        },
})
export default store;