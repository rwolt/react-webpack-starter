import React, { Component } from 'react';

class AddSectionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="section-add-button">Add Section</button>
      </div>
    );
  }
}

export default AddSectionButton;
