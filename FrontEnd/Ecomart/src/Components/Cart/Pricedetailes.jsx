import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
export default function Pricedetailes(pro) {
 return(
    <div className='pricecard '>
    <h3 style={{ marginBottom: '0px' }}>Cart Totals</h3>
    <table>
      <tr>
        <td>
          <h5>Sub Total</h5>
        </td>
        <td>
          <h5 style={{ textAlign: 'right', color: "red", fontSize: '25px' }}>₹{pro.totalitemscost}</h5>
        </td>
      </tr>
      <tr>
        <td>
          <h5>Delivery Charge</h5>
        </td>
        <td>
          <h5 style={{ textAlign: 'right', color: "red", fontSize: '25px' }}>₹{pro.delivarycharge}</h5>
        </td>
      </tr>
      <tr>
        <td>
          <h5>Shipping</h5>
        </td>
        <td>
          <p>Enter your address to view shipping options</p>
          <Link to='/user/manageaddress' style={{ textDecoration: 'none', color: 'darkgreen', textAlign: 'right' }}>Shipping Address</Link>
        </td>
      </tr>
      <tr>
        <td>
          <hr className='hr' />
        </td>
        <td>
          <hr className='hr' />
        </td>
      </tr>
      <tr>
        <td>
          <h5>Total</h5>
        </td>
        <td>
          <h5 style={{ textAlign: 'right', color: "red", fontSize: '25px' }}>₹{pro.delivarycharge + pro.totalitemscost}</h5>
        </td>
      </tr>
    </table>
    <button style={{ width: '100%', margin: '5px' }}>Proceed to Checkout</button>
  </div>
  
 )
}
