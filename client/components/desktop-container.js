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
import HomepageHeading from './heading'
import {Link, animateScroll} from 'react-scroll'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({fixed: false})
  showFixedMenu = () => this.setState({fixed: true})

  render() {
    const {children} = this.props
    const {fixed} = this.state

    return (
      <Responsive etWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            id="home"
            inverted
            textAlign="center"
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : 'top'}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" onClick={() => animateScroll.scrollToTop()}>
                  Home
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="knot-list"
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Knot List
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="about"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Menu.Item>
                <Menu.Item as={Link}>Careers</Menu.Item>
                <Menu.Item position="right"></Menu.Item>
              </Container>
            </Menu>

            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

export default DesktopContainer
