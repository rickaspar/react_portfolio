import React, {useEffect, useState} from "react";
import Weather from '../assets/weather_app.jpg';
import Todo from '../assets/todo.jpg';
import Portfolio from '../assets/portfolio_pic.jpg';
import Html from '../assets/html_pages.jpg';
import './Carousel.css'
const Carousel = ()=> {
  const data = [Portfolio, 
                Todo, 
                Weather, 
                Html]
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = ()=>{
    if (currentIndex === data.length-1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }
  useEffect(()=>{
    const interval = setInterval(()=> {carouselInfiniteScroll()
    }, 3000)
    return ()=> clearInterval(interval)})

  return(
    <><div>
      <h3>Click on the link to see images from recent projects</h3>,
      
    </div>
    <div>
      <img src={data[currentIndex]}  className="image-item"  ></img>
    </div>
     <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <a className="carousel-item" href={item}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}>{item}
          </a>
        );
      })}

    </div> 
    </>
  )
}

export default Carousel