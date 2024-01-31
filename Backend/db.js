const sql=require('mysql')
const connetor=sql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6681069',
    password:'PFx8iWwIQp',
    database:'sql6681069'
})
connetor.connect((err)=>{
   if(err) console.log(err);
   console.log('connected....!')

})
module.exports=connetor;