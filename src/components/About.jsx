import { useEffect } from 'react'
import Image10 from '../images/Image10.jpg'
import '../css/about.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const About = () => {

  useEffect(() => {
    aos.init({ 
      duration: 1000 });
  }, []);
  return (
    <div className='about-overall-container'>
      <h2 className='text-center pt-5'>About Us</h2>
        <div className='about-container d-flex flex-column flex-md-row mx-auto w-75 my-5 pb-5'>
            <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center m-2'>
                <img src={Image10} alt="about-us" className='img-fluid' style={{ height: '100%', objectFit: 'cover'}} data-aos="zoom-in"/>
            </div>
            <div className='col-12 col-md-6 about-text-container d-flex flex-column justify-content-center m-2' data-aos="flip-right">
                <h4>What we are about</h4>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius totam corrupti recusandae nemo, voluptate amet reprehenderit officia eaque odio corporis, sed soluta alias pariatur facilis</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam neque quos tempora tempore illum dolores quia nobis temporibus, laudantium culpa atque quaerat a illo? Aspe</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam neque quos tempora tempore illum dolores quia nobis temporibus, laudantium culpa atque quaerat a illo? Asperna</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About