const express=require('express')
const router=express.Router();
const {tokenverify}=require('../tokenverify_middleware')
const {checkperson}=require('../Login and signup/signup')
router.get('/user',tokenverify,async(req,res)=>{
   

   if(req.user)
   {
    const data=await checkperson(req.user);
    if(data.length>=1)
    {    console.log(data)
        res.status(200).json({status:'Success',data:data})
    }
    else{
        res.status(200).json({status:'UnSuccess',msg:'User Details are not found'})

    }
    }
   
})

module.exports=router