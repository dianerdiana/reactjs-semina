import Sponsor from 'components/sponsor'
import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

const CompaniesLogo = () => {
  return (
    <section className="companies-logo-wrapper">
      <Container>
        <Sponsor />
      </Container>
    </section>
  )
}

export default CompaniesLogo
