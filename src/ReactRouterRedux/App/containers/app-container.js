import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container body-content">
          {this.props.children}
          <hr />
          <Footer />
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.object.isRequired
}

export default connect((state) => state)(AppContainer);
