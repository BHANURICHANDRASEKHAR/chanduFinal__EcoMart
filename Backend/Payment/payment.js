const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const db=require('../db')
require('dotenv').config();
const router = express.Router();
const {tokenverify} =require('../tokenverify_middleware')
const orderstodatabase=require('./add_orders_to_database')
const razorpay = new Razorpay({
  key_id: 'rzp_test_QCqTQQpSTVIb3x',
  key_secret: 'I3LhKlqfyQitMLRv21Y2Nblr',
});
router.post('/create-order', async (req, res) => {
  const data = req.body[0];

  const options = {
    amount: data.price * 100, // amount in paise (100 paise = 1 INR)
    currency: 'INR',
    receipt: 'order_rcptid_11',
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/success',tokenverify,async(req, res) => {
  const [productdetails]=req.body[0];
  const order_id=req.body[1];
  const email=req.user;
  const status={'status':true}
  try {
   
     orderstodatabase(productdetails,order_id,email,status) ;
     res.status(200).json({status:'Success',order_id:order_id.razorpay_order_id})
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    res.status(500).send('Internal Server Error');
  }

});

router.post('/addcoddata',tokenverify,(req,res)=>{
  const productdetails=req.body[0];
  const id=new Date().getMilliseconds()
const order_id={razorpay_order_id:id}
  const email=req.user;
  const status={'status':false}
  try{
    orderstodatabase(productdetails,order_id,email,status) ;
    console.log('Success')
    res.status(200).json({status:'Success',order_id:order_id.razorpay_order_id})
  } 
  catch (error) {
   console.error('Error verifying webhook signature:', error);
   res.status(500).send('Internal Server Error');
 }
})
router.get('/getorderdata',tokenverify,(req,res)=>{
  const email=req.user;
  const order_id=req.query;
  try{
    const query=`select * from orders where email=(?) and order_id=(?)`
    db.query(query,[email.email,order_id.id],(err,data)=>{
      if(err) throw err;
      console.log(data)
      res.json({status:'Success',data:data})
    })
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})
module.exports = router;
rts=router;