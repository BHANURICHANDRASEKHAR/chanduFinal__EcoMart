const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express();
const signup=require('./Login and signup/signup')
const loginroute=require('./Login and signup/login')
const useraccountroute=require('./Useraccount/account')
const addtocartrouter=require('./cart/addtocart')
const removetocart=require('./cart/removetocart')
const cartdatarouter=require('./cart/fetchdatafromcart')
const removeentireitem=require('./cart/removeentireitem')
const userextradata=require('./Useraccount/userextradata')
const useraddress=require('./Useraccount/useraddress')
const getuseraddress=require('./Useraccount/getuseraddress')
const deleteuseraddress=require('./Useraccount/deleteuseraddress')
app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())
app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      exposedHeaders: ['Content-Type', 'Authorization', 'XMLHttpRequest'],
      credentials: true, // Allow credentials
    })
  );
  
app.use(signup)
app.use(loginroute)
app.use(useraccountroute)
app.use(addtocartrouter)
app.use(cartdatarouter)
app.use(removetocart)
app.use(removeentireitem)
app.use(userextradata)
app.use(useraddress)
app.use(getuseraddress)
app.use(deleteuseraddress)
app.listen(5000,()=>{
    console.log(`app is ruuning`)
})