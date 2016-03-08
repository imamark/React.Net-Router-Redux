import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date();
    let year = date.getFullYear();
    
    return (
      <footer>
          <p>&copy; {year} - My ASP.NET Application</p>
      </footer>
    )
  }
}
