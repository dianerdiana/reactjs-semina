import React from 'react'

// ** Components
import Testimony from './Testimony'
import SimilarEvents from './SimilarEvents'
import EventDetails from './EventDetails'
import EventDescription from './EventDescription'

// ** Images
import details from 'assets/images/details/image-1.jpg'
import avatar from 'assets/images/avatar/avatar-1.jpg'

const Details = () => {
  const data = {
    title: 'Start Your Design Career With Design Sprint',
    img: details,
    speaker: {
      name: 'Shayna Putri',
      profession: 'Designer',
      avatar: avatar
    },
    place: 'Gowork',
    city: 'Bandung',
    time: '2023-05-15 15:00:00',
    price: '2,980',
    description: `
      Most realtors and investors are using Social Media (Facebook and Google)
      ineffectively because they don't know what they're doing or to start.
      <br>
      They spend hours and hours trying different things and getting nowhere.
      <br>
      This makes them feel like giving up on marketing altogether.
      <br><br>
      We are a group of professionals who have decided to help people making
      <br>
      travel experiences whenever they want and wherever they are.
      <br>
      Our virtual tours have as their topic the beauties of the ancient world,
      <br>
      such as Ancient Egypt or Ancient Rome, Art and History.
    `,
    keypoints: [
      {
        id: 1,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      },
      {
        id: 2,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      },
      {
        id: 3,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      }
    ]
  }

  return (
    <React.Fragment>
      <EventDetails data={data} />
      <EventDescription description={data.description} address={data.city} />
      <SimilarEvents />
      <Testimony />
    </React.Fragment>
  )
}

export default Details
