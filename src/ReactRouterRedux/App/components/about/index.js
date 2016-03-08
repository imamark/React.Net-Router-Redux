import React, { Component, PropTypes } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>Use this area to provide additional information.</p>
      </div>
    )
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
