const express=require('express')
const router=express.Router();
const connecter=require('../db')
router.post('/useraddress',(req,res)=>{
    const address=req.body;
    const q1='insert into users_address values(?,?,?,?,?,?,?,?,?)';
    connecter.query(q1,[address.name,address.email,address.pincode,address.number,address.address,address.city,address.state,address.landmark,address.addtype],(err=>{
        if(err) throw err;
        res.status(200).json({status:'Success'});
    }))
})
module.exports=router;