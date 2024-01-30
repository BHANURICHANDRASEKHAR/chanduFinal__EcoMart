import React from 'react'
import useFunction from '../customs hooks/useFunction'
function Cartbutton1({item}) {
    const [addItems, removeItems]=useFunction();
    const {productname,quantity,price,productimg,id} = item;

  return (
    <React.Fragment>
    <div className="prdct-qty-container ">
    <button className='prdct-qty-btn' type='button' onClick={() => { removeItems(item) }}>
     -
    </button>
    <input type="text" className='qty-input-box' value={quantity || 0} disabled name="" id="" />
    <button className='prdct-qty-btn' type='button' onClick={() => { addItems([id, productname, price, productimg]) }}>
     +
    </button>
  </div>
 
    </React.Fragment>
  )
}

export default Cartbutton1