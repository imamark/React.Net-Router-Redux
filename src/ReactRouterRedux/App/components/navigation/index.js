import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>ReactRouterRedux</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li><IndexLink href='/' to='/'>Home</IndexLink></li>
            <li><Link href='/about' to='/about'>About</Link></li>
            <li><Link href='/contact' to='/contact'>Contact</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
