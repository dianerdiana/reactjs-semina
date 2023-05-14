import React from 'react'

// ** RB
import { Row, Col } from 'react-bootstrap'

// ** Impoert Images
import apple from 'assets/images/logo/companies/apple.svg'
import adobe from 'assets/images/logo/companies/adobe.svg'
import slack from 'assets/images/logo/companies/slack.svg'
import spotify from 'assets/images/logo/companies/spotify.svg'
import google from 'assets/images/logo/companies/google.svg'

const Sponsor = () => {
  const companies = [
    {
      name: 'Apple',
      icon: apple
    },
    {
      name: 'Adobe',
      icon: adobe
    },
    {
      name: 'Slack',
      icon: slack
    },
    {
      name: 'Spotify',
      icon: spotify
    },
    {
      name: 'Google',
      icon: google
    }
  ]

  return (
    <>
      <div className="text-center py-6">
        <span className="text-gray">Events held by top & biggest global companies</span>
      </div>
      <Row className="justify-content-center pb-6">
        {companies.map((comp, index) => {
          return (
            <Col xs="3" sm="2" key={index} className="mb-3">
              <img
                src={comp.icon}
                alt={comp.name}
                className="img-thumbnail bg-transparent border-0"
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Sponsor
