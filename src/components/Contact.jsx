import React from 'react'

const Contact = () => {
  return (
    <div className='contact-overall-container'>
        <h2 className='text-center'>Contact Us</h2>
        <div className='d-flex'>
            <div className='white justify-content-center text-center align-items-center'>
                <h1>We're here</h1>
                <p>Our door is always open for a cup of coffee</p>
            </div>
            <div className='bg-info coloured justify-content-center text-center align-items-center text-white'>
                <h1 className='mt-3'>Let's Talk</h1>
                <p>Share your excitement with us</p>
                <a href="mailto:info@yummygum.com" className='text-decoration-none text-white'>Info@yummygum.com</a>

            </div>
        </div>
    </div>
  )
}

export default Contact