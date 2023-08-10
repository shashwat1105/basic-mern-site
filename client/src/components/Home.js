import React from 'react'
import '../styles/Home.css'
import logos from '../images/eye.png'
const Home = () => {
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
