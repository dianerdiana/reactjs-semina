// ** Third Party Components
import Slider from 'react-slick'
import { Button, Card } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img1.jpg" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img2.jpg" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img3.jpg" />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
      </div>
      <br />

      <div className="text-center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </>
  )
}

export default Carousel
