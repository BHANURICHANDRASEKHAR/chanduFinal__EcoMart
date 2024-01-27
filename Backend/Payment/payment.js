const express=require('express');
const Razorpay=require('razorpay');
require('dotenv').config();
const router=express.Router();
const connector=require('../db')
const razorpay = new Razorpay({
    key_id: process.env.razorpay_id,
    key_secret:process.env.razorpay_scecretekey ,
  });
router.post('/',(req,res)=>{
    console.log('payment')
});
router.post('/create-order', async (req, res) => {
    const options = {
      amount: 50000, // amount in paise (100 paise = 1 INR)
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
module.exports=router;