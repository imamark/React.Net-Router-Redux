import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import About from '../components/about';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <About {...this.props.metaData} />
    )
  }
}

AboutContainer.propTypes = {
  metaData: PropTypes.object
}

export default connect((state) => state)(AboutContainer);
