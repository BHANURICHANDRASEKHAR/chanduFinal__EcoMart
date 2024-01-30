import axios from "axios";
import { getcookie } from "../../../fetchfunction";
export default function getorderdata(id)
{ console.log("get orders data")
    const token=getcookie();
   try{
    axios.get(`http://localhost:5000/payment/getorderdata?id=${id}`,{
        headers:{'x-token':token}
    }).then(res=>{
       console.log(res.data);
    }).catch(err=>{
       console.log(e.message)
    })
   }
   catch(e)
   {
    console.log('hello')
   }
}