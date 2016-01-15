import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { metaData: { Title, Description } } = this.props;

    return (
      <div>
        <h2>{Title}</h2>
        <h3>{Description}</h3>
        <p>Use this area to provide additional information.</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    metaData: state.MetaData
  };
}

export default connect(mapStateToProps)(About);
