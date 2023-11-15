import React from 'react'
import '../Homepage/home.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

<div className="head">
    <div className='under'>
<h1 className='drexie'> DREXIE</h1>
<u>choose your fashion</u>
</div>
</div>
<div className='navbar_elements'>
    <div className='navbar_elements_sub'>
      <Link className='links' to='/' >
    <p>HOME</p>
    </Link> 
    <Link className='links' to='/PRODUCT' >
    <p>PRODUCTS</p>
    </Link>
    <Link className='links' to='/Aboutus'>    <p>ABOUT US</p></Link>


<Link className='links' to='/Contact'>   


  <p>CONTACT US</p> 


 </Link>

    </div>
</div>
    </>
  )
}

export default Home