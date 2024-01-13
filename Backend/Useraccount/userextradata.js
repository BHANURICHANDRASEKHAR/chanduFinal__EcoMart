const express=require('express')
const router=express.Router();
const connector=require('../db')
router.post('/adduserdata',(req,res)=>{
    const userdata=req.body;
    const q1='update users set phnumber=(?),firstname=(?),lastname=(?),gender=(?) where mail=(?)';
    connector.query(q1,[userdata.phonenumber,userdata.firstname,userdata.lastname,userdata.gender,userdata.email],(err)=>{
        if(err) throw err;
      const query2='select * from users where mail=(?)';
      connector.query(query2,[userdata.email],(err,data)=>{
        if(err) throw err;
       res.status(200).json({status:'Success',data:data})
      })
    })
})
module.exports=router;