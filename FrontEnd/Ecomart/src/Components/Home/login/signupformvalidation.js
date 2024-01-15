import axios from "axios";
const validateForm = (formData,setError) => {
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
      setError('Please fill in all required fields.');
      return false;
    }
    if (formData.phnumber.length !=10) {
        setError('Please enter a valid Phone number.');
        return false;
      }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid Email address.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    if (formData.password !== formData.repassword) {
      setError('Passwords do not match.');
      return false;
    }

    setError(''); 
    return true;
  };
export default validateForm;
export function loginvalidate(formData,setError)
{
  if (formData.email.trim() === '' || formData.password.trim() === '') {
    setError('Please fill in all required fields.');
    return false;
  }
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    setError('Please enter a valid Email address.');
    return false;
  }

  if (formData.password.length < 6) {
    setError('Password must be at least 6 characters long.');
    return false;
  }
  
  setError(''); 
  return true;
}
// for add user detaiils
export function adduserdata(formData,setMsg)
{
  if (formData.firstname.trim() === '' || formData.lastname.trim() === '' || formData.phonenumber.trim==='') {
    setMsg('Please fill in all required fields.');
    return false;
  }
  setMsg('');
  return true;
}
// for user address
const statedata = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
];
export function addressvalidation(formData,setError)
{
  if (formData.name.trim() === '' || formData.number.trim() === '' || formData.pincode.trim() === ''  || formData.address.trim() === '' || formData.city.trim() === '' || formData.state.trim() === '') {
    setError('Please fill in all required fields.');
    return false;
  }
  if(formData.number.length!=10)
  {
    setError('Phone number Mustbe 10 digits');
   return false;
  }
  if(formData.pincode.length!=6)
  {
    setError('Pin code Length Must be 6');
    return false;
  }
 try{
 const pincode=formData.pincode;
   axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
  .then((res)=>{
    if(res.data[0].Status=='Error')
    {
      console.log(res)
      setError('Please Provide a Correct Pincode');
      console.log('hello')

      return false;
    }
    else{
      setError('');
      return true;
    }
  })
  .catch(e=>{
console.log(e.message)
  })
 }
 catch(e)
 {
  console.log(e.message)
 }


}