import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron>
          <h1>ASP.NET</h1>
          <p className="lead">ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS and JavaScript.</p>
          <p><a href="http://asp.net" className="btn btn-primary btn-lg">Learn more &raquo;</a></p>
      </Jumbotron>
    )
  }
}
