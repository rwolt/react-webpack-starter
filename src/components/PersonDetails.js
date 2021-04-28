import React, { Component } from 'react';
import PersonDetailsForm from './PersonDetailsForm';

class PersonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  submitForm() {
    this.setState({
      editable: false,
    });
  }

  editForm() {
    this.setState({
      editable: true,
    });
  }

  render() {
    let { profileName, profileEmail, profilePhone } = this.state;
    return (
      <div id="info" className="container">
        <div className="section-title">
          Personal Details
          <button className="edit-button" onClick={this.editForm}>
            Edit
          </button>
          <button className="submit-button" onClick={this.submitForm}>
            Submit
          </button>
        </div>
        <PersonDetailsForm
          editable={this.state.editable}
          handleChange={this.handleChange}
          name={profileName}
          phone={profilePhone}
          email={profileEmail}
        />
      </div>
    );
  }
}

export default PersonDetails;
