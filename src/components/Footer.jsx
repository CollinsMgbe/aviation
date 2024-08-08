import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-5 p-5 bg-black text-light'>
      <div className='d-flex justifyn-content-around'>
        <div>
          <p>
              Appland is completely creative, lightweight, clean app landing page
          </p>
          <p>
              Made with byDesigning
          </p>
          <div className='d-flex'>
            <div className='me-3 fs-2' data-aos="flip-left"><FaFacebook/></div>
            <div className='me-3 fs-2' data-aos="flip-up"><FaPinterest/></div>
            <div className='me-3 fs-2 mt-1' data-aos="flip-right"><i class="bi bi-skype"></i></div>
            <div className='me-3 fs-2 mt-1' data-aos="flip-down"><i class="bi bi-twitter-x"></i></div>
          </div>
        </div>
        <div>
          <ul>
              <li><h4 href="#">About</h4></li>
              <li><h4 href="#">About Us</h4></li>
              <li><h4 href="#">Coporate Sales</h4></li>
              <li><h4 href="#">Tems &amp; Policy</h4></li>
              <li><h4 href="#">Community</h4></li>
          </ul>
        </div>
        <div>
          <ul>
              <li><h4 href="#">Support</h4></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Help &amp; Support</a></li>
          </ul>
        </div>
        <div>
          <ul>
              <li><a href="#">Call Centre</a></li>
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Help Centre</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer