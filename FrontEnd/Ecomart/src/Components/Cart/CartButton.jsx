import React, { useEffect } from 'react';
import { Badge } from 'antd';
import reacticons from '../../icons';
import './cart.css';
import { useSelector } from 'react-redux';
import useFunction from '../customs hooks/useFunction';
export default function CartButton() {
  const [addItems, removeItems,cartdata]=useFunction();
var count=cartdata.itemslist
 count=count.length
  return (
    <Badge count={count || "0"} style={{ background: 'red', color: 'white' }}>
    <reacticons.shopingcart size={25} style={{ marginBottom: '10px' }} />
    </Badge>
  );
}
