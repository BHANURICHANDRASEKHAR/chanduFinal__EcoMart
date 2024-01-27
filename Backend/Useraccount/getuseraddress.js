const express=require('express')
const router=express.Router();
require('dotenv').config();
const jwt=require('jsonwebtoken')
const connecter=require('../db')
router.get('/getuseraddress',(req,res)=>{
    var token = req.header('x-token');
    try{
     const payload=  jwt.verify(token,process.env.jwt_secretekey);
     const query1='select * from users_address where mail=(?)'
     connecter.query(query1,[payload.email],(err,data)=>{
        if(err) console.log(err.message);
        res.status(200).json({status:'Success',data:data})
     })
    }
    catch(e)    
    {
        console.log(e.message)
    }
})
module.exports=router;