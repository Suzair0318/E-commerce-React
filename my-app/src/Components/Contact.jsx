import React from 'react'
import { Foot } from './footer/Foot'
import { Navbar } from './Header/Navbar'

export const Contact = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center my-4'>Contact Us</h1>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4268303208783!2d67.13526857535126!3d24.917525342971846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338558fcfc3f3%3A0xbf49b5917cbbdcbb!2sMunawar%20Chowrangi%20Rd%2C%20Block%2012%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696626953722!5m2!1sen!2s"
       allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width : "80%" , height : "450px" , marginLeft : '130px' , style:"border:0" , marginTop : '40px', borderRadius : '30px' }}></iframe>

    <div className='cont-form my-4'>
      <div className="container">
    <div class="mb-3">
      <label>User Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button className='btn btn-primary'>Send</button>
    </div>
    </div>

    <Foot/>
    </>
  )
}
