import React, { useState } from 'react'
import '../styles/Login.css';
import eye from '../images/eye.png';
import {Link} from 'react-router-dom';
import validator from 'validator';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [userMail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
const navigate=useNavigate();


  const getUser = (event) => {
    const data = event.target.value;
    setUserEmail(data);
    console.log(data);
  };

  const getPassword = (event) => {
    const data = event.target.value;
    setUserPassword(data);
  };


const checkMailAndPassword=(e)=>{
  e.preventDefault();
  if(validator.isEmail(userMail) && userPassword.length>=4){

    axios.post('http://localhost:8000/',{userMail,userPassword})
    .then((res)=>{
      console.log(res);
if(res.data==='exist'){
  toast.success("Welcome Back!");
  navigate('/home');
}
else if(res.data==="notexist"){
toast.error("User doesn't exist.Register first!")
console.log("error !!!!");
}


    })
    .catch((err)=>{
      toast.error("Some error occured");
      console.log(err);
    })

  }
  else if(!validator.isEmail(userMail)){
    toast.error("enter valid email")
  }
  else if(userPassword.length<4){
    toast.error("password too short");
  }
  else if(userMail===''&& userPassword===''){
    toast("Enter valid data");
  }

}

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


    <button onClick={checkMailAndPassword} className='btn'>Login</button>
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
