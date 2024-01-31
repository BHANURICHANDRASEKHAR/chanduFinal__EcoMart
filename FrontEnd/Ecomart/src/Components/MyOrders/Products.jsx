import React from 'react'
import ProductDetails from '../PaymentPages/OrdersPages/ProductDetails'
function Products({ordersdata}) {
 
  return (
    <div  className='myorders-child' >
     <Search/>
      <div>
      {
        ordersdata.map((items,index)=>{
        return(<div className='p-4 products'><ProductDetails  productdata={items} key={index}/></div>)
        })
      }
      </div>
    </div>
  )
}

export default Products
const Search=()=>{
  return( <div className="container d-flex align-items-center">
  <input type="search" className="search-box" placeholder="Search...for a Item"/>
  <button className="btn btn-outline-success mb-4">Search</button>
  
</div>
)
}