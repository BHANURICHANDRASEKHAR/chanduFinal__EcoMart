import React, { useContext, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos'
import reacticons from '../../../src/icons';
import Sticky1 from './Sticky1';
import Sticky from './Sticky';
import './shop.css'
import '../../Routers/navbar.css'
import '../../Components/Home/features/features.css'
import Rating from './Rating';
import axios from 'axios';
import rawdata from '../../../data/testdata';
import {cartActions} from '../../../Redux-store/Centralstore/cart-slice'
import { useDispatch } from 'react-redux';
import { getcookie } from '../../../fetchfunction';
import useFunction from '../customs hooks/useFunction';
export default function Shop() {
useEffect(()=>{
    AOS.init();
})
  // State for storing and displaying product data
  const [groupdata, setgroupdata] = useState(rawdata);

const [addItems]=useFunction();
  // Filtering function based on price
  function fun(filtervalue) {
    const newdata = rawdata.filter((e) => {
      const { price } = e;
      if (filtervalue >= price) {
        return price;
      }
    });
    setgroupdata(newdata);
  }

  // Function to set new data
  function newsetdata(data1) {
    setgroupdata(data1);
  }
 const addToCart = (id, productname, price, productimg) => {
  addItems([id,productname,price,productimg])
    // event.preventDefault();
    //   const values = [
    //     {

    //       id: id,
    //       productname: productname,
    //       price: price,
    //       productimg: productimg,
        
    //     },

    //   ];
    //   const token=getcookie();
    //   if(token)
    //   {
    //     axios.post('http://localhost:5000/addtocart',values,{
    //       headers: { 'x-token': token }
    //     })
  
    //     .then((res)=>{
    //       if(res.data.status=='Success')
    //       {  
    //         dispatch(cartActions.addtocart(res.data.data))
  
    //       }
    //     })
    //  .catch((e)=>{
    //   console.log(e.message)
    //  })
    //   }
    //   else{
    //     navigate('/login')
    //   }
     
    }
//       axios
//         .post('http://localhost:8082/addtocart', values)
//         .then((res) => {
//           if (res.data.status === 'Success') {
//             const userdata = res.data.data1;
//             setcartcount(userdata.length);
//             localStorage.setItem('itemscount', userdata.length);
//             localStorage.setItem('cartstatus', true);
//             localStorage.setItem('cartdata', JSON.stringify(userdata));
//           }
//         })
//         .catch((err) => {
//           console.log('unsuccess', err);
//         });
//     } else {
//       navigate('/login');
//     }
//   };

  return (
    <div className='container-fluid'>
      <div className='rowdata11'>
         <Sticky fun={fun} newsetdata={newsetdata} />
        <div className='col'>
          <div className='main-grid'>
            {groupdata.map((e,index) => {
              const { id, image, name, price } = e;
            const data=JSON.stringify(e)

              return (
             
                <Card style={{ width: 'auto',height:'370px' }}  key={index}
                data-aos='fade-up'
                data-aos-duration='900'
                data-aos-delay=''
                data-aos-easing='ease-in-out'>
                <Card.Img variant="top" src={image} />
          <Card.Body>
       
          <Link to={`/productdetails/${e.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
          
           <div style={{marginLeft:'15px'}}>
           <Card.Title><b>{name}</b></Card.Title>
           <Card.Text>
             <Rating /> <span style={{ margin: '3px' }}>6</span>
             <br />
             <b style={{ marginTop: '10px' }}>Price: {price}</b>
           </Card.Text></div>
           </Link>
            <button
            
              style={{width:'auto'}}
              onClick={(event) => {
                addToCart(id,name, price, image);
              }}
            >
              <reacticons.shopingcart style={{ margin: '10px' }} />
              Add to Cart
            </button>
          </Card.Body>
         
        </Card>
              );
            })}
          </div>
        </div>

      </div>
              <Sticky1 fun={fun} newsetdata={newsetdata} />

    </div>
  );
}
