import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="preview-photo"></img>
        <p className="preview-name">{this.props.name}</p>
        <p className="preview-email">{this.props.email}</p>
        <p className="preview-phone">{this.props.phone}</p>
      </div>
    );
  }
}

export default Preview;
