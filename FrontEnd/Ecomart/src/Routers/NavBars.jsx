import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import './navbar.css';
import { FaShopify } from "react-icons/fa";// shop react icon
import CartButton from '../Components/Cart/CartButton';
import reacticons from '../icons';
import useAuth from '../Components/customs hooks/useAuth';
export default function NavBars() {
  const [auth,logout]=useAuth();
  return (
    <React.Fragment>
      <div className="container">
        <div className="nav1">
          <input type="checkbox" id="nav-check" />

          <div className="nav-header">
            <div className="nav-title">𝕰𝖈𝖔 𝖒𝖆𝖗𝖙</div>
          </div>

          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
              <span style={{ background: 'black' }}></span>
            </label>
          </div>

          <div className="nav-links">
          <NavLink to="/" >{<reacticons.home/>} Home</NavLink>  

          <NavLink to="/usercart"><CartButton/> Cart</NavLink>  

          <NavLink to="/account">{<reacticons.account/>} Account</NavLink>  
          <NavLink to="/shop">{<reacticons.shop/>} Shop</NavLink>  
          {
            auth ? <Link to='/' onClick={logout}> {<reacticons.logout/>} Logout</Link> 
            : <NavLink to="/login">{<reacticons.login/>} Login </NavLink> 
          }

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
