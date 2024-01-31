const express=require('express')
const router=express.Router();
const db=require('./../../db');
const {tokenverify} = require('./../../tokenverify_middleware')
router.post('/cancelorder',tokenverify,(req,res)=>{
    const email=req.user.email;
    const reasons=req.body[0];
    const productdata=req.body[1];

   const deletequery=`delete from orders where email=(?) and order_id=(?)`
   try{
    db.query(deletequery,[email,productdata.order_id],(err,data)=>{
        if(err) console.log(err.message);
        const insertquery=`INSERT INTO cancel_orders values(?,?,?,?,?,?,?,?)`;
        db.query(insertquery,[email,productdata.order_id,productdata.productname,productdata.productimage,productdata.price,productdata.delivarydate,reasons.reason,reasons.feedback],(err,data)=>{
            if(err)console.log(err.message);
            res.status(200).json({status:'Success'})
        })
      })
  }
  catch(err){
    console.log(err.message)
  }
})
router.get('/get',tokenverify,(req,res)=>{
    const id=req.query.id;
    console.log(id)
    const email=req.user.email;
  
    const selectquery=`select * from cancel_orders where email=(?) and order_id=(?)`;
    try{
    db.query(selectquery,[email,id],(err,data)=>{
        if(err) console.log(err.message);
       
        res.status(200).json({status:'Success',data:data})
      })
    }
    catch(err){
        console.log(err.message)
    }
})
module.exports=router;  