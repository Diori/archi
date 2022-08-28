import React, {useState} from 'react';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';
import {SliderData} from '../pages/slider/SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';



function Home({slides}) {

const [curent, setCurent] = useState(0)
const positionNumero = slides.length;

const nextSlide = () =>{
  setCurent(curent === positionNumero - 1 ? 0 : curent + 1);
};

const prevSlide = () => {
  setCurent(curent === 0 ?positionNumero - 1 : curent - 1);
};

if(!Array.isArray(slides) || slides.length <= 0){
  return null;
}


return(

  <div>
  <section className='slider'>
  <FaArrowAltCircleLeft className='left__Arrow' onClick={prevSlide} />
  <FaArrowAltCircleRight className= 'right__Arrow' onClick={nextSlide}/>
  {
    SliderData.map((slider, index) =>{
      return (
        <div className={index === curent ? 'slide active' : 'slide'} key={index}>
        {
          index === curent && (
            <img src={slider.image} alt='not image' className='images' />
          )
        }
        </div>
      )
      
    })
  }
  </section>
  </div>  
)
}

export default Home
