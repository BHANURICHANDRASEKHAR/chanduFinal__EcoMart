import React, { useState, useEffect } from 'react';
import reacticons from '../../../icons';
import useAdress from '../../customs hooks/useAdress';
import Userlogo from '../../UserAccount/Userlogo'
import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import NoPageFound from '../../NoPageFound';
function UserAddress(pro) {
  const [getUserAddress, removeUserAddress, addresslist] = useAdress();
  const [flag, setFlag] = useState(true);
  const useraddressdata=useSelector((state)=>state.useraddressslice.userAddressList);


  useEffect(() => {
    console.log('page rendered and data is the',useraddressdata);
    getUserAddress();
   
  }, [pro.count]);

  const addressDelete = (address) => {
    removeUserAddress(address)
  };
  function recheck(data)
  {
    
    pro.setValues(data)
  }
  return (
    <React.Fragment>
      <div className='container'>
        {useraddressdata.length>0 ? (
          useraddressdata.map((address1,index) => {
            const { name, number, addtype, pincode, city, state, address: userAddress, locality } = address1;
            return (
              <div key={index} className='row' style={{ border: '1px solid #D3D3D3', padding: '10px', marginBottom: '5px' }}>

            <button style={buttonStyle} onClick={()=>recheck(address1)}> {addtype}</button>
                <br />
                <div>
                  <h4>
                    {name}&ensp;{number}
                  </h4>
                </div>
                <div>
                  {locality || ''}&ensp;{userAddress}&ensp;{city}&ensp;{state}-{pincode}
                </div>
                <Popconfirm
                title="Delete the Item"
                description="Are you sure to delete this address?"
                style={{width:'100px'}}
                onConfirm={()=>addressDelete(address1)}
                okText="Yes"
                cancelText="No"
                placement="leftBottom">
                <reacticons.delete style={{ height: '50px', width: '50px', position: 'absolute', right: '13%', marginTop: '30px', cursor: 'pointer' }}/>
                 </Popconfirm>
              </div>
            );
          })
        ) : (
          <NoPageFound  
          status="403"
          title="No Address are Found"
          subTitle="No Address are Found"/>
        )}
      </div>
    </React.Fragment>
  );
}

const buttonStyle = {
  width: '100px',
  background: '#F0F0F0',
  color: 'black',
  margin: '0px',
  marginTop: '10px',
  fontSize: '16px',
  height: '29px',
};

export default UserAddress;
