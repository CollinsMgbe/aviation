import React from 'react'
import Image1 from '../images/Image1.jpg'
import Image2 from '../images/Image2.jpg'
import Image3 from '../images/Image3.jpg'


const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} class="d-block w-100" alt="Helicopter" style={{ height: '90vh'}}/>
    </div>
    <div class="carousel-item">
      <img src={Image2} class="d-block w-100" alt="Airplane" style={{ height: '90vh'}}/>
    </div>
    <div class="carousel-item">
      <img src={Image3} class="d-block w-100" alt="Fighter jet" style={{ height: '90vh'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
