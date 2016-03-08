import React, { Component, PropTypes } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>

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

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
