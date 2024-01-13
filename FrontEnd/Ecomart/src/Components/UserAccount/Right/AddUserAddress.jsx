import React,{useState  } from 'react'
import './input.css'
import UserAddress from './UserAddress'
import useAdress from '../../customs hooks/useAdress';
export default function AddUserAddress() {
  const [adduseraddress,removeuseraddress]=useAdress();
    const errorflag=true;
    const divStyle = {
        color: errorflag ? 'red' : 'green',
        marginTop:'20px',
        fontSize:'16px'
        
      };
    const error='hello';
    const [edit,setEdit]=useState(false)
    const [values, setValues] = useState({
        name:'',
        email:'',
        number:'',
        pincode:'',
        locality: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        altphone: '',
        addtype:'',
    
      });
    
      const changeHandler = (event) => {
        
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value
        });
       
       
      };
    
      function show() {
        setEdit(prev=>!prev);
      }
      const submit = (event) => {
        event.preventDefault();
        adduseraddress(values)
      }
    return (
        <div className='id'>
          <h3>Manage Address</h3>
          <p
            style={{
              border: '1px solid skyblue',
              height: '36px',
              fontSize: '18px',
              paddingLeft: '10px',
              color: 'blue'
            }}
            onClick={show}
          >
           {edit ? '- Hide Content' : ' + Add New Address'}
          </p>
          {edit && (
            <React.Fragment >
              <div className='input'>
                <input
                  type="mail"
                  placeholder='Email'
                  name='mail'
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder='10 digits of number'
                  name='name'
                  onChange={changeHandler}
                />
              </div>
              <div className='input'>
                <input
                  type="text"
                  placeholder='pincode'
                  name='pincode'
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder='Locality'
                  name='locality'
                  onChange={changeHandler}
                />
              </div>
              <div className='input' style={{ marginTop: '30px' }}>
                <label>Address</label>
                <br />
                <input
                  type="text"
                  placeholder='address'
                  style={{ width: '62.5%', height: '10vh' }}
                  name='address'
                  onChange={changeHandler}
                />
              </div>
              <div className='input'>
                <input
                  type="text"
                  placeholder='city/town'
                  name='city'
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder='state'
                  name='state'
                  onChange={changeHandler}
                />
              </div>
              <div className='input'>
                <input
                  type="text"
                  placeholder='landmark(optional)'
                  name='landmark'
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder='alt phone number(optional)'
                  name='altphone'
                  onChange={changeHandler}
                />
                </div>
                <div className='input'>
                <label>Address Type</label><br/><br/>
                <input type="radio"  name='addtype' value="Home"  onChange={changeHandler}/><label>Home</label>
                <input type="radio"  name='addtype' value="Office"  onChange={changeHandler}/><label>Office</label>
                 </div>
                 <div style={divStyle}>{error}</div>
              <button type="button" onClick={submit} style={{marginBottom:"20px"}}>
                Save
              </button>
              <button type="button" onClick={() => setEdit(false)}>
                Cancel
              </button>
            </React.Fragment>
          )}
          <UserAddress setValues={setValues}/>
        </div>
      );
    };

