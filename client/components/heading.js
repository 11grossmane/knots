import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import {Link} from 'react-scroll'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({mobile}) => (
  <Container text>
    <Header
      as="h1"
      content="The Knot Haven"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content="Tie Knots, Live Life."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Container style={{textAlign: 'center', marginBottom: '5px'}}>
      <Button size="large" inverted>
        Log in
      </Button>
      <Button style={{marginLeft: '0.5em'}} size="large" inverted>
        Sign Up
      </Button>
    </Container>
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}
export default HomepageHeading
