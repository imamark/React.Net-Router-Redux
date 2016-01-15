import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navigation';

class Layout extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var date = new Date();
    var year = date.getFullYear();
    
    return (
      <div>
        <Navigation />
        <div className="container body-content">
          {this.props.children}
          <hr />
          <footer>
              <p>&copy; {year} - My ASP.NET Application</p>
          </footer>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Layout);
