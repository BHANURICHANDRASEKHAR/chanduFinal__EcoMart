const express=require('express');
const router=express.Router();
const connector=require('../db');
const jwt=require('jsonwebtoken')
require('dotenv').config();
router.put('/removeitemfromcart',(req,res)=>{
try{
    var token = req.header('x-token');

    const payload=  jwt.verify(token,process.env.jwt_secretekey);
    const email=payload.email;
    const id=req.body.id;
    const query1='delete from ecomartcart where email=(?) and id=(?)';
    connector.query(query1,[email,id],(err)=>{
        if(err) throw err;
        const query2='select * from ecomartcart';
        connector.query(query2,(err,data)=>{
          if(err) throw err;
          res.status(200).json({status:'Success',data:data})
        })
    })
}
catch(e)
{
    console.log(e.message)
}
})
module.exports=router;