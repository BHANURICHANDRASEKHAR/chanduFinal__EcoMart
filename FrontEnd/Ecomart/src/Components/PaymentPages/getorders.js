import axios from "axios";
import { getcookie } from "../../../fetchfunction";

export default async function getorderdata(id) {
    const token = getcookie();
    try {
        const response = await axios.get(`http://localhost:5000/payment/getorderdata?id=${id}`, {
            headers: { 'x-token': token }
        });

     
        return response.data.data;
    } catch (err) {
        console.error(err.message);
       
        throw err;
    }
}
