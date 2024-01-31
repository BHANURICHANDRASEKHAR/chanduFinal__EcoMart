const express=require('express')
const connector=require('../db')
const tokenverify=require('../tokenverify_middleware')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const router=express.Router();

router.post('/removetocart',async (req,res)=>{ 
   
    var token = req.header('x-token');
    try {
      if (!token) {
        return res.status(401).json({ message: 'Login is required' });
      }
      const payload = jwt.verify(token, process.env.jwt_secretekey);
      if(payload)
      {
        const mail=payload.email;
        console.log(req.body)

        const flag=fetchcartdata(mail,req.body)
        if(flag)
        {
            const q1='select * from ecomartcart where email=(?) and id=(?)'
            connector.query(q1,[mail,req.body.id],(err,data)=>{
                if(err) throw err;
               console.log('empty data is',data[0])
                res.status(200).json({status:'Success',data:data})
            })
        }
      }
    }
     catch (e) {
        console.log(e.message);
        res.status(400).json({ status: 'UnSuccess', msg: 'user not logged in' });
      }
})
module.exports=router
function fetchcartdata(email,productdata)
{
   
    const query1='select * from ecomartcart where email=(?) && id=(?)'
    connector.query(query1,[email,productdata.id],(err,data)=>{
        if(err) throw err;
        console.log(data)
        if(data[0].count==1)
        {
          console.log('hello this is the removeing data',data[0])
            const query2='delete from ecomartcart where email=(?) && id=(?)';
            connector.query(query2,[email,data[0].id],(err)=>{
            if(err) throw err;
         
            })
        }
        else{
            const count=data[0].count;
             const inccount=count-1
             const query3='update ecomartcart set count=(?) where id=(?)'
             connector.query(query3,[inccount,productdata.id],(err,data)=>{
                if(err) throw err;
              
             })
        }
    })
    return true;
}