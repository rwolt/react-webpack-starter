import React, { Component } from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button class="delete-button">Delete</button>
      </div>
    );
  }
}

export default DeleteButton;
