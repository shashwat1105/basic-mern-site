import React, { useState } from 'react'
import '../styles/Login.css';
import eye from '../images/eye.png';
import {Link} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

const Register= () => {

  const [userMail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getUser = (event) => {
    const data = event.target.value;
    setUserEmail(data);
    console.log(data);
  };

  const getPassword = (event) => {
    const data = event.target.value;
    setUserPassword(data);
  };

  const getConfirmPassword = (event) => {
    const data = event.target.value;
    setConfirmPassword(data);
  };


  const checkEmailAndPassword=()=>{

if(userMail===''){
toast.error("Enter the email");
}
else if(userPassword==='' || userPassword.length<4){
  toast.error("Password must be 4 charachter long..")

}
else if(confirmPassword==='' || confirmPassword.length<4){
  toast.error("enter the valid password")
}
else if(userPassword!==confirmPassword){
toast.error("Password doesn't match");
}

  }
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
      <div className='main'>
<div className='container'>
  <div>
    <h1>Register Here</h1>
  </div>
  <div className='images' style={{height:'80px' ,width:'80px'}}>
    <img src={eye} alt='eye' style={{height:'80px' ,width:'80px'}}/>
  </div>

  <form>

  <input type='email'
  style={{height:'35px', margin:'10px 30px'}}
  className='emails' value={userMail} onChange={getUser} placeholder='Enter the email...'></input>
      <input type='password'
      style={{height:'35px', margin:'10px 30px'}}
      className='passwords' value={userPassword} onChange={getPassword} placeholder='Enter the password...'></input>
      <input type='password'
      style={{height:'35px', margin:'10px 30px'}}
      className='confirmPasswords' value={confirmPassword} onChange={getConfirmPassword} placeholder='Renter the password...'></input>


    <button className='btn'>Register</button>
  </form>
  <div className='textbox'>
    Already a user ?<Link to='/' style={{textDecoration:'none'}} > <span > Login </span> </Link>
  </div>
</div>
      </div>
    </>
  )
}

export default Register
