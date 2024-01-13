import React from 'react';
import { Link } from 'react-router-dom';
import reacticons from '../../../icons';
import { Popconfirm } from 'antd';
import useAuth from '../../customs hooks/useAuth';
import '../useraccount.css'
const UserDetails = () => {
const [auth,logout]=useAuth()
console.log('helo this',logout)
    const AccountSettings=()=>{
        return( <div style={{ margin:'10px' }}>
        <div className='d-flex'><reacticons.usersetting className='icons'/><p><b>ACCOUNT SETTINGS</b></p>
        </div>
    </div>)
    }

    const UserActions = ()=>{
        return( <div style={{ margin:'10px' }}>
        <div className='d-flex'><reacticons.wallet className='icons'/><p><b>My Stuff</b></p>
</div>
    </div>)
    }

    const Logout = ()=>{
       return(<Popconfirm
        title="Logout "
        description="Are you sure to Logout?"
        onConfirm={logout}
        style={{width:'100px'}}
        okText="Yes"
        cancelText="No"
        placement="leftBottom"><div style={{ margin:'10px' }}>
       <reacticons.logout className='icons'></reacticons.logout>Logout
   </div></Popconfirm>)
    }
    const userItems = [
        { to: '/account/personalinformation', text: 'personal information' },
        { to: '/account/manageaddress',  text: 'manage address' },
       
    ];
    const stufItems=[ { to: '/account/cuppons',  text: 'my coupons' },
        { to: '/account/review',  text: 'my reviews & ratings' },
        { to: '/account/notifications', text: 'all notifications' },
        { to: '/account/wishlist', text: 'my wishlist' },]

    const MenuItem = (to,  text) => (
        <li key={to} style={{marginBottom:'5px'}}>
            <Link to={to} className='link'>
              
                <p>{text}</p>
            </Link>
        </li>   
    );

    return (
        <div className='hello1'>
            <div style={{ height: '38px',fontSize:'20px' ,margin:'10px' }}>
             <Link to='/account/myorders' className='link'><reacticons.wallet className='icons'/><b>My Orders</b></Link>
            </div>
            <hr/>
            <AccountSettings/>
            <ul>{userItems.map(item => MenuItem(item.to, item.text))}</ul>
            <br/>
            <hr/>
            <UserActions />
            <ul>{stufItems.map(item => MenuItem(item.to, item.text))}</ul>
            <br/>
            <hr/>
           <Logout/>
        </div>
    );
};

export default UserDetails;
