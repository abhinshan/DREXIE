import React from 'react'
import Home from '../Homepage/Home'
import Footer from '../Homepage/Footer'
import '../Contact/contact.css'


function Contact() {
  return (
    <>
    <div className='contact_main'>
        <div className='map_div'>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.88565155433!2d81.736063!3d21.125498!5m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzUwLjAiTiA4McKwNTAnNDQuNSJF!5e0!3m2!1sen!2sus!4v1604575040994!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        >
        </iframe>

        </div>
<div className='user_information'>
  <div className='input'>
<input type="text" placeholder='Your name..' />

<input type="text" placeholder='Your email..' />
</div>
 <div className='input_field'>
<input  type="text" placeholder='Subject...' />


<input type="textarea" placeholder='messege' />
</div>

</div>


        </div>


        
        
    </>
  )
}

export default Contact