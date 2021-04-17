import React, { Component } from 'react';
import PersonDetailsForm from './PersonDetailsForm';

class PersonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  render() {
    return (
      <div id="info" className="container">
        <div
          className="section-title"
          onClick={() => this.setState({ collapsed: !this.state.collapsed })}
        >
          Personal Details
        </div>
        {!this.state.collapsed ? <PersonDetailsForm /> : ''}
      </div>
    );
  }
}

export default PersonDetails;
