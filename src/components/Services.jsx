import { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const Services = (props) => {

  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className='container my-5'>
        <h4 className='row text-center my-4'>{props.title}</h4>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <div className="card mx-2" data-aos={props.left}>
             <img src={props.Image4} className="card-img-top" alt="about aircraft" style={{height: "30vh"}}/>
             <div className="card-body">
             <h5 className="card-title">{props.titleOne}</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
        </div>
        </div>

          <div className='col-12 col-md-4'>
            <div className="card mx-2" data-aos={props.middle}>
             <img src={props.Image5} className="card-img-top" alt="about-aircraft"  style={{height: "30vh"}}/>
             <div className="card-body">
             <h5 className="card-title">{props.titleTwo}</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
             </div>      
        </div>
        </div>

          <div className='col-12 col-md-4'>
            <div className="card mx-2" data-aos={props.right}>
             <img src={props.Image6} className="card-img-top" alt="about-aircraft"  style={{height: "30vh"}}/>
             <div className="card-body">
             <h5 className="card-title">{props.titleThree}</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Services
