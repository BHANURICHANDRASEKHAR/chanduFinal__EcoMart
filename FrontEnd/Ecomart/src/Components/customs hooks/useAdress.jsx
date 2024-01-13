import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {AddressActions} from '../../../Redux-store/Centralstore/useraddressslice'
export default function useAdress() {
const dispatch=useDispatch();
const addresslist=useSelector(state=>state.useraddressslice)

function addUserAddress(userdata)
{
  console.log('userdata is the 123',userdata)
    // dispatch(AddressActions.addaddress(data))
}
function removeuseraddress(data)
{
  dispatch(AddressActions.removeaddress(data))
}

  return [addUserAddress,removeuseraddress,addresslist]
}
