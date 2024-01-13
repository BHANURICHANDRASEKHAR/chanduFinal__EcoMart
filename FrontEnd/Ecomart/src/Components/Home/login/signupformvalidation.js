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
export function adduserdata(formData,setMsg)
{
  if (formData.firstname.trim() === '' || formData.lastname.trim() === '' || formData.phonenumber.trim==='') {
    setMsg('Please fill in all required fields.');
    return false;
  }
  setMsg('');
  return true;
}