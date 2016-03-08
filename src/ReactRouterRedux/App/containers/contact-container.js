import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Contact from '../components/contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Contact {...this.props.metaData} />
    )
  }
}

ContactContainer.propTypes = {
  metaData: PropTypes.object
}

export default connect((state) => state)(ContactContainer);
