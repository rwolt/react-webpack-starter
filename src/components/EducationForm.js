import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
    };

    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  editForm() {
    this.setState({
      editable: true,
    });
  }

  submitForm() {
    this.setState({
      editable: false,
    });
  }

  render() {
    if (this.state.editable) {
      return (
        <div>
          <button className="edit-button" onClick={this.editForm}>
            Edit
          </button>
          <button className="submit-button" onClick={this.submitForm}>
            Submit
          </button>
          <form id="education-history" onChange={(e) => this.handleChange(e)}>
            <label htmlFor="school-name">School: </label>
            <input
              type="text"
              id="school-name"
              name="schoolName"
              value={this.state.schoolName}
            ></input>
            <label htmlFor="school-degree">Area of Study: </label>
            <input
              type="text"
              id="school-degree"
              name="schoolDegree"
              value={this.state.schoolDegree}
            ></input>
            <label htmlFor="school-start">Start Date: </label>
            <input
              type="date"
              id="school-start"
              name="schoolStart"
              value={this.state.schoolStart}
            ></input>
            <label htmlFor="school-finish">End Date: </label>
            <input
              type="date"
              id="school-finish"
              name="schoolFinish"
              value={this.state.schoolFinish}
            ></input>
          </form>
        </div>
      );
    }
    return (
      <div>
        <button className="edit-button" onClick={this.editForm}>
          Edit
        </button>
        <button className="submit-button" onClick={this.submitForm}>
          Submit
        </button>
        <div className="education-history">
          <label htmlFor="school-name">School: </label>
          <p id="school-name" name="school-name">
            {this.state.schoolName}
          </p>
          <label htmlFor="school-degree">Area of Study: </label>
          <p id="school-degree" name="school-degree">
            {this.state.schoolDegree}
          </p>
          <label htmlFor="school-start">Start Date: </label>
          <p id="school-start" name="school-start">
            {this.state.schoolStart}
          </p>
          <label htmlFor="school-finish">End Date: </label>
          <p id="school-finish" name="school-finish">
            {this.state.schoolFinish}
          </p>
        </div>
      </div>
    );
  }
}

export default EducationForm;
