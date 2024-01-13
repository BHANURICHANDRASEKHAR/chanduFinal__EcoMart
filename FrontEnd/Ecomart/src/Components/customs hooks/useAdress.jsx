import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {AddressActions} from '../../../Redux-store/Centralstore/useraddressslice'
export default function useAdress() {
const dispatch=useDispatch();
const addresslist=useSelector(state=>state.useraddressslice)
function adduseraddress(data)
{
    dispatch(AddressActions.addaddress(data))
}
function removeuseraddress(data)
{
  dispatch(AddressActions.removeaddress(data))
}

  return [adduseraddress,removeuseraddress,addresslist]
}
