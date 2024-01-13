import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
    name:'cart',
    initialState:{
        itemslist:[],
        totalquntity:0,
        totalprice:0,
        deliverycharge:60
    }
    ,
    reducers:{
        removecart(state,action)
        {
            const newItem=action.payload;
           newItem[0].count-=1;
            const match=state.itemslist.find((items)=>items.id==newItem[0].id)
           if(match.quantity==1)
           {
             state.itemslist=state.itemslist.filter((items)=>items.id!=newItem[0].id)
           }
           else{
            console.log('hello2 ')

            match.quantity--
             match.totalprice-=newItem.price;
           }
           state.totalquntity-=1,
           state.totalprice-=match.price
        },
        addtocart(state = initialState, action) {
         const data1 = action.payload;        
            data1.forEach(data=> {
                const match=state.itemslist.find((items)=>items.id===data.id)
                   if(match)
                   {
                       match.quantity+=1
                       match.totalprice+=data.price
                   }
                   else{
                       state.itemslist.push({
                           productname:data.productname,
                           price:data.price,
                           id:data.id,
                           quantity:data.count,
                           totalprice:data.price,
                           productimg:data.productimg
                       })
       
                   }
                   state.totalprice+=data.price
                   state.totalquntity+=1;
               });
         
        }
        ,
        deleteentireitem(state,action)
        {
            const id=action.payload;
            const match=state.itemslist.find((items)=>items.id==id)
            if(match)
            {
                state.totalquntity-=match.quantity;
                state.totalprice-=match.quantity*match.price
                state.itemslist=state.itemslist.filter((items)=>items.id!==id)
            }
        },
       setdelivary(state,action)
       {
       
       state.deliverycharge=60;
       },
       getdelivary(state,action)
       {
       
       state.deliverycharge-=60;
       },
      datapush(state,action)
      {
        state.itemslist=[];
        state.totalprice=0;
        
        const data1 = action.payload; 
        data1.forEach((data)=>{
            state.itemslist.push({
                productname:data.productname,
                price:data.price,
                id:data.id,
                quantity:data.count,
                totalprice:data.price,
                productimg:data.productimg
            })
            state.totalprice+=data.price*data.count;
            state.totalquntity+=1;      
        })      
      }
       
    },
    logout(state,action)
    {
       state.initialState.itemslist=[] 
    }
 
})

export const cartActions=cartslice.actions;
export default cartslice;
// console.log('cart data',a)
            // const match=state.itemslist.find((items)=>items.id===a.id)
            // if(match)
            // {
            //     match.quantity+=1
            //     match.totalprice+=a.price
            // }
            // else{
            //     state.itemslist.push({
            //         productname:a.productname,
            //         price:a.price,
            //         id:a.id,
            //         quantity:a.count,
            //         totalprice:a.price,
            //         productimg:a.productimg
            //     })
            // }
            // state.totalquntity+=1;
            // state.totalprice+=a.price