import React, { useEffect } from 'react'
import '../styles/Home.css'
import logos from '../images/eye.png'
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Home = () => {
const navigate=useNavigate();
  useEffect(()=>{
    const token= localStorage.getItem('token');
    if(token){
      const user= jwt.decode(token);
    }else{
      localStorage.removeItem('token');
navigate('/');
  setTimeout(()=>toast.error("Enter valid Credentials!"),1000)
    }
  },[])
  return (
    <>
      <div className='cover'>
<div className='navbar'>
<div className='nav-wrapper'>

  <div className='logo-area'>
    <img src={logos} alt='logo'/>
    <h3>MyAPP</h3>

  </div>


  <div className='serach-bar'>
    <input type='text' placeholder='Search'></input>
  </div>

<div className='profile-area'>
  <img src={logos} alt='profile'></img>
</div>
</div>
</div>
<div className='sidebar'>
<h1>Sidebar</h1>
</div>

<div className='main-area'>
<h1>Main-area</h1>

</div>

      </div>
    </>
  )
}

export default Home
