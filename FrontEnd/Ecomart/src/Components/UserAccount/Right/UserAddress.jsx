import React, { useState, useEffect } from 'react';
import reacticons from '../../../icons';
import useAdress from '../../customs hooks/useAdress';
import Userlogo from '../../UserAccount/Userlogo'
import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
function UserAddress(pro) {
  const [addUserAddress, removeUserAddress, addresslist] = useAdress();
  const [flag, setFlag] = useState(true);
  const userdata=useSelector((state)=>state.userdetaileslice.userdetails);

  useEffect(() => {
    async function fetchdata()
    {
      const email=await userdata.length > 0 ? userdata[0].email : '';
      addUserAddress(email);

    }
    fetchdata();
    if (addresslist && addresslist.no_ofaddress >= 1) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [addresslist]);

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
        {flag ? (
          addresslist && addresslist.userAddressList.map((address1,index) => {
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
                description="Are you sure to delete this Item?"
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
          <h5>No addresses are found</h5>
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
