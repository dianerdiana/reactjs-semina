// ** Third Party Components
import { Carousel } from 'react-bootstrap'

// ** Images
import image_1 from '../../assets/images/carousel/image-3.jpg'
import image_2 from '../../assets/images/carousel/image-2.jpg'
import image_3 from '../../assets/images/carousel/image-2.jpg'

const CarouselComponent = () => {
  const data = [
    {
      id: 1,
      img: image_1
    },
    {
      id: 2,
      img: image_2
    },
    {
      id: 3,
      img: image_3
    }
  ]

  return (
    <Carousel interval={5000} variant="light" className="text-center">
      {data.map((crs) => {
        return (
          <Carousel.Item key={crs.id}>
            <img
              src={crs.img}
              alt="Carousel"
              className="rounded rounded-4 img-carousel"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default CarouselComponent
