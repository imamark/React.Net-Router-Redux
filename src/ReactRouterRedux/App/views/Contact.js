import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { metaData: { Title, Description } } = this.props;

    return (
      <div>
        <h2>{Title}</h2>
        <h3>{Description}</h3>

        <address>
            One Microsoft Way<br />
            Redmond, WA 98052-6399<br />
            <abbr title="Phone">P:</abbr>
            425.555.0100
        </address>

        <address>
            <strong>Support:</strong> <a href="mailto:Support@example.com">Support@example.com</a><br />
            <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
        </address>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    metaData: state.MetaData
  };
}

export default connect(mapStateToProps)(Contact);
