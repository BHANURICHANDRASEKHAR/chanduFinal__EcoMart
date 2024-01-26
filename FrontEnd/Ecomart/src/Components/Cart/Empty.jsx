// Empty.js
import React from 'react';
import { Link } from 'react-router-dom';
import reacticons from '../../icons';
import img from '../../assets/imgs/emptycart.jpg'
export default function Empty() {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          margin: '150px 150px 0px 450px',
        }}
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay=""
        data-aos-easing="ease-in-out"
      >
        <img
          src={img}
          style={{ width: '300px', height: '200px', objectFit: 'contain' }}
          alt="Empty Cart"
        />
        <h2>Your Cart is Empty!</h2>
        <p>Add items to it now.</p>
        <Link
        to="/shop"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <button
          style={{ width: '180px' }}
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay=""
          data-aos-easing="ease-in-out"
        >
          <reacticons.logout />
          &ensp; Back to Shop
        </button>
      </Link>
      </div>

    </div>
  );
}
