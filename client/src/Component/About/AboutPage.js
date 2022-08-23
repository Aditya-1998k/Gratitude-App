import React from 'react'
import Navbar from '../Navbar/Navbar';
import "../Signup/Signup.css"

function AboutPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className='login-main'>
            <div className='login-submain'>
              <div>
                <h2>Email: <strong>aditya98gupta@gmail.com</strong></h2>
                <h2>Mobile: <strong>9076920359</strong></h2>
                <h2>Address: <strong>Deoria (UP)</strong></h2>
                <h2><strong>Feel Free To Contact</strong></h2>
                <h2>Available: <strong>24*7 always</strong></h2>
                <p><strong>Click on Gratitude App to Go to Home Page</strong></p>
              </div>
            </div>
      </div>
    </>
  )
}

export default AboutPage