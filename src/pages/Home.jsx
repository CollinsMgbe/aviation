import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Image4 from '../images/Image4.jpg'
import Image5 from '../images/Image5.jpg'
import Image6 from '../images/Image6.jpg'
import Image7 from '../images/Image7.jpg'
import Image8 from '../images/Image8.jpg'
import Image9 from '../images/Image9.jpg'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Services titleOne="Ticketing" titleTwo="Hotel Reservation" titleThree="Flight Booking"  Image4={Image4} Image5={Image5} Image6={Image6} title="Our Services" left="fade-down-right" middle="fade-down" right="fade-down-left" />
      <Services titleOne="Luggage Handling" titleTwo="Private Booking" titleThree="VIP" Image4={Image7} Image5={Image8} Image6={Image9} left="fade-up-right" middle="fade-up" right="fade-up-left" />
      <About/>
      <Contact/>
     </div>
  )
}

export default Home
