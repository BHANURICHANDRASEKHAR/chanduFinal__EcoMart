import React from 'react'
import Home from '../Components/Home/Home'
import Login from '../Components/Home/login/Login'
import Signup from '../Components/Home/login/Signup'
import Account from '../Components/UserAccount/Account'
import { Route,Routes } from 'react-router-dom'
import NavBars from './NavBars'
import useAuth from '../Components/customs hooks/useAuth'
import Workingonit from '../Components/UserAccount/Workingonit'
import Footer from '../Components/Footer'
import NoPageFound from '../Components/NoPageFound'
import { Spin } from 'antd'
import AddUserAddress from '../Components/UserAccount/Right/AddUserAddress'
import UserInfo from '../Components/UserAccount/Right/UserInfo'
import { useSelector } from 'react-redux'
import { AuthActions } from '../../Redux-store/Centralstore/reduers'
const Shop=React.lazy(()=>import('../Components/shop/Shop'))
const Cart=React.lazy(()=>import('../Components/Cart/Cart'))
import Wishlist from '../Components/UserAccount/WishList/Wishlist' //user Wishlist
const ProductsDetails=React.lazy(()=>import('../Components/Product details/ProductsDetails'))
import Loading from '../Components/Loading'
import PaymentMain from '../Components/PaymentPages/PaymentMain'
import OrderPlaced from '../Components/PaymentPages/OrderPlaced'
export default function Routers() {
  const [auth,logout]=useAuth();

  return (
   <React.Fragment>
   <NavBars/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/account' element={<Account/>}>
   <Route path='personalinformation' element={<UserInfo/>}/>
   <Route path='myorders' element={<Workingonit/>}/>

   <Route path='manageaddress' element={<AddUserAddress/>}/>
   <Route path='cuppons' element={<Workingonit/>}/>
   <Route path='review' element={<Workingonit/>}/>
   <Route path='notifications' element={<Workingonit/>}/>
   <Route path='wishlist' element={<Wishlist/>}/>

   </Route>
   <Route path='/usercart' element={<React.Suspense fallback={<Loading/>}><Cart/></React.Suspense>}/>
    <Route path='/shop' element={<React.Suspense fallback={<Loading/>}><Shop/></React.Suspense>}/>
   <Route path='/login' element={<Login/>}/>
   
   <Route path='/signup' element={<Signup/>}/>

    <Route path='/productdetails/:id' element={<React.Suspense fallback={<Loading/>}><ProductsDetails/></React.Suspense>}/>
    <Route path='/orderplaced/:order_id' element={<OrderPlaced/>}/>
    <Route path='/payment/:id' element={<PaymentMain/>}/>
   <Route path='*' element={<NoPageFound status='404' title='404' subtitle="Sorry, the page you visited does not exist."/>}/>
   </Routes>

   {auth &&<Footer/>}
   </React.Fragment>
  )
}
