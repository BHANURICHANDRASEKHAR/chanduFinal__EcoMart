const express=require('express');
const router=express.Router();
const connector=require('../db')
router.put('/deleteuseraddress',(req,res)=>{
const data=req.body;
const deletequery='delete from users_address where mail=(?) and pincode=(?) and address=(?) and number=(?) and landmark=(?)'
connector.query(deletequery,[data.email,data.pincode,data.address,data.number,data.landmark],(err)=>{
    if(err) console.log(err.message);   
    const query1='select * from users_address where mail=(?)'
    connector.query(query1,[data.email],(err,data)=>{
        if(err) console.log(err.message);
        res.status(200).json({status:'Success',data:data})
     })
})
})
module.exports=router;