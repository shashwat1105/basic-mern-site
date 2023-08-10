import React, { useState } from 'react'
import '../styles/Login.css';
import eye from '../images/eye.png';
import {Link} from 'react-router-dom';


const Login = () => {

  const [userMail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const getUser = (event) => {
    const data = event.target.value;
    setUserEmail(data);
    console.log(data);
  };

  const getPassword = (event) => {
    const data = event.target.value;
    setUserPassword(data);
  };

  return (
    <>
      <div className='main'>
<div className='container'>
  <div>
    <h1>Login Here</h1>
  </div>
  <div className='images'>
    <img src={eye} alt='eye'/>
  </div>

  <form>

  <input type='email' className='emails' value={userMail} onChange={getUser} placeholder='Enter the email...'></input>
      <input type='password' className='passwords' value={userPassword} onChange={getPassword} placeholder='Enter the password...'></input>

    {/* <input type='email' className='emails' value={userMail} onKeyDown={getUser()} placeholder='Enter the email...'></input> */}
    {/* <input type='password' className='passwords' value={userpassword} onKeyDown={getPassword()} placeholder='Enter the password...'></input> */}

    <button className='btn'>Login</button>
  </form>
  <div className='textbox'>
    New User ?<Link to='/register' style={{textDecoration:'none'}} > <span > Register </span> </Link>
  </div>
</div>
      </div>
    </>
  )
}

export default Login
