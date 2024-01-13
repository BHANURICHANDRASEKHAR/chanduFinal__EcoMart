import React, { useState } from 'react'
import './input.css'
function UserInfo() {
    const [edit,setedit]=useState(false)
    function editFun()
    {
        setedit(!edit)
    }
    const [userdetails,setuserdetails]=useState({
        firstname:'',
        lastname:'',
        gender:'',
        email:'',
        phonenumber:'',
        })
        const setuserdata=(e)=>{setuserdetails({...userdetails,[e.target.name]:e.target.value})
        }
function submit()
{

}
  return (
    <div className='id' data-aos="fade-down"
    data-aos-duration="900" data-aos-delay='' data-aos-easing='ease-in-out'>
      <h3 style={{width:'maxContent'}}>
        Personal Information <span onClick={editFun} style={{marginLeft:'10px',color:'blue',fontWeight:"500",fontSize:'16px'}}>{edit ? <span>Cancel</span> : <span>Edit</span>}</span>

         </h3>
        
     <div className='input' >
     <label>firstname</label>
       <input
         type="text"
         id="userInfoInput"
        value={userdetails.firstname}
         name='firstname'
         disabled={!edit}
         onChange={setuserdata}
       />
       
     <label>lastname</label>
     <input
       type="text"
       id="userInfoInput"
      value={userdetails.lastname}  
       name='lastname'
       disabled={!edit}
       onChange={setuserdata}
     />
       
  
    </div>
      <div className='input'>
      <label>Gender</label><br/>
      <input type="radio"  name='gender' value="male" disabled={!edit}  onChange={setuserdata}/><label>Male</label><br/>
      <input type="radio"  name='gender' value="female" disabled={!edit}  onChange={setuserdata}/><label>FeMale</label><br/>
      <input type="radio"  name='gender' value="orthers" disabled={!edit}  onChange={setuserdata}/><label>Orthers</label><br/>
      </div>
   <div className='input'>
  <label >Email</label>
   <br/>
   <input
   type="mail"
   id="userInfoInput"
  onChange={setuserdata}
   name='email'
   disabled
   value={userdetails.email}
 /> 
    </div>
    <div className='input'>
    <label >Phone number</label>
     <br/>
     <input
     type="text"
     id="userInfoInput"
   
     name='phonenumber'
    value={userdetails.phonenumber}
     disabled={!edit}
      onChange={setuserdata}
   />    
      </div>{edit?(<div><div >error</div>
      <button onClick={submit}>Save</button></div>):(<span></span>)}
      </div>
    
  );  
}

export default UserInfo;