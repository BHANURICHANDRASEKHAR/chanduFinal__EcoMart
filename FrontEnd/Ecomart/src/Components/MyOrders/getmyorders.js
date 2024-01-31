import { getcookie } from "../../../fetchfunction";
import axios from "axios";
const token=getcookie();
export default function myordersdata(name,setordersdata)
{
    axios.get(`http://localhost:5000/myorders/get?tablename=${name}`,{
        headers:{
            'x-token':token,
        }
    })
 .then(res=>{
    if(res.data.status=='Success')
    {
        setordersdata(res.data.data)
    }
 })
}