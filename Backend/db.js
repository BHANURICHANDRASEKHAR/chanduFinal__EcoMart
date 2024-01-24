const sql=require('mysql')
const connetor=sql.createConnection({
    host:'sql6.freemysqlhosting.net',
    user:'sql6679420',
    password:'1y1UCHlfzI',
    database:'sql6679420'
})
connetor.connect((err)=>{
   if(err) throw err;
   console.log('connected....!')

})
module.exports=connetor;