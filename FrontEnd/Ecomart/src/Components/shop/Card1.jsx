// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import './shop.css'
// import Rating from './Rating';
// import rawdata from '../../../data/testdata';
// function Card1() {
//   return (
//    <div className='col'>
//    <div className='main-grid'>
//    {
//     rawdata.map((data,index)=>{
//         const {image,name,price}=data;
//         return(
//             <Card style={{ width: 'auto',height:'fitContent' }} key={index}>
//             <Card.Img variant="top" src={image} />
//             <Card.Body>
//               <Card.Title>{name}</Card.Title>
//               <Card.Text>
//               <Rating/> <span style={{margin:'3px'}}>6</span>
//                <br/><b style={{marginTop:'10px'}}>Price :{price}</b>
//               </Card.Text>
//               <button
//               id='btn'
//               onClick={() => {
//                 addToCart(id, name, price, image);
//               }}
//             >
//               <reacticons.shopingcart style={{margin:'10px'}} />
//               Add to Cart
//             </button>            </Card.Body>
//           </Card>
//         )
//     })
//    }
//    </div>
//    </div>
//   );
// }

// export default Card1;