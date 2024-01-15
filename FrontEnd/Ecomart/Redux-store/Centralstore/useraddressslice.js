import { createSlice } from "@reduxjs/toolkit";
const useraddressslice=createSlice({
    name:'useraddressslice',
    initialState:{
        userAddressList:[],
        no_ofaddress:0
    },
    reducers: {
        addaddress(state, action) {
          state.userAddressList=[];
          state.no_ofaddress=0;
          const address = action.payload;
          address.forEach(address => {
            state.userAddressList.push({
              name: address.name,
              email: address.mail,
              number: address.number,
              pincode: address.pincode,
             
              address: address.address,
              city: address.city,
              state: address.state, 
              landmark: address.landmark,
           
              addtype: address.addtype,
            });
            state.no_ofaddress+=1
          });
         
         
        },
        removeaddress(state,action)
        {
          const data=action.payload;
          const match=state.userAddressList.find(state=>state.email==data.email && state.pincode==data.pincode && state.address==data.address)
          if(match)
          {
            state.initialState=state.userAddressList.filter(state=>state.email!=match.email && state.address!=match.address)
          }
          state.no_ofaddress-=1
        }
      }
      
})
export const AddressActions=useraddressslice.actions;
export default useraddressslice;