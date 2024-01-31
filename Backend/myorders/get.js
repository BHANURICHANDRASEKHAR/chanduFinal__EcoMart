const express=require('express')
const router=express.Router();
const db=require('../db');
const {tokenverify}=require('../tokenverify_middleware')
router.get('/get',tokenverify,(req,res)=>{
    const tablename=req.query.tablename;
   try{
     const selectquery=`select * from ${tablename}`;
     db.query(selectquery,(err,data)=>{
        if(err) throw err;
        res.status(200).json({status:'Success',data:data})
     })
   }
   catch(err){
       console.log(err.message)
   }
})
module.exports=router;