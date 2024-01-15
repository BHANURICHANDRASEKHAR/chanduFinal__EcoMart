import axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { notifysuccess, notifyerror } from './tostisy';
import { userdetailsActions } from './Redux-store/Centralstore/accountslice';
import { AuthActions } from './Redux-store/Centralstore/reduers';
export default function fetchdatafromdatabase(...rest) {
  const [method, path, dispatch, navigate] = rest;

  const token=  getcookie()
  axios[method](path,{
  
    headers: { 'x-token': token },
  })
    .then(res => {
      if (res.data.status === 'Success') {
    
        dispatch(userdetailsActions.adduserdetails(res.data.data));
       
      } else {
        notifyerror(toast, res.data.message);
        navigate('/login');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      navigate('/login');
      notifyerror(toast, 'Please Login');
    });
}
export function getcookie()
{
  try{
    const token = Cookies.get('user');
  return token;
  } 
  catch(e)
  {
    console.log('no token is present')
  }
}