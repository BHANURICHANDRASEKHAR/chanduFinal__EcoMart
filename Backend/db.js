const sql=require('mysql')
const connetor=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecomart_users'
})
connetor.connect((err)=>{
   if(err) throw err;
   console.log('connected....!')

})
module.exports=connetor;