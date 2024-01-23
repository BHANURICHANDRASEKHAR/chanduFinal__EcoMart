import React from 'react'
import useFunction from '../customs hooks/useFunction'
function Cartbutton1({item}) {
    const [addItems, removeItems]=useFunction();
    const {productname,quantity,price,productimg,id} = item;

  return (
   <React.Fragment>
 <div className='cartbutton'>  <button style={{ width: '100px' }} onClick={() => {removeItems((id))}}>-</button><span>{quantity || 0}</span>
 <button style={{ width: '100px' }} onClick={() => {addItems(([id,productname,price,productimg])) }}>+</button></div>

   </React.Fragment>
  )
}

export default Cartbutton1