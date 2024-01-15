const express=require('express')
const router=express.Router();
const connecter=require('../db');
router.post('/useraddress',(req,res)=>{
    const address=req.body;
    const query1='select * from users_address where pincode=(?) and mail=(?) and landmark=(?)';
    connecter.query(query1,[address.pincode,address.email,address.landmark],(err,data)=>{
        if(err) throw err;
        if(data.length>=1)
        {
            res.status(200).json({status:'UnSuccess'});
        }
        else{
            const q1='insert into users_address values(?,?,?,?,?,?,?,?,?)';
            connecter.query(q1,[address.name,address.email,address.pincode,address.number,address.address,address.city,address.state,address.landmark,address.addtype],(err=>{
                if(err) throw err;
                res.status(200).json({status:'Success'});
            }))
        }
    })
})
module.exports=router;
