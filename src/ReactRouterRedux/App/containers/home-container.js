import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    )
  }
}

export default connect((state) => state)(HomeContainer);
