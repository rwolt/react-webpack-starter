import React, { Component } from 'react';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
    };

    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
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
          <form
            id="career-history"
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <label htmlFor="company-name">Company: </label>
            <input
              type="text"
              id="company-name"
              name="companyName"
              value={this.state.companyName}
            ></input>
            <label htmlFor="company-position">Position: </label>
            <input
              type="text"
              id="company-position"
              name="companyPosition"
              value={this.state.companyPosition}
            ></input>
            <label htmlFor="company-tasks">Description of Tasks: </label>
            <input
              type="text"
              id="company-tasks"
              name="companyTasks"
              value={this.state.companyTasks}
            ></input>
            <label htmlFor="company-start">Start Date: </label>
            <input
              type="date"
              id="company-start"
              name="companyStart"
              value={this.state.companyStart}
            ></input>
            <label htmlFor="company-finish">End Date: </label>
            <input
              type="date"
              id="company-end"
              name="companyEnd"
              value={this.state.companyEnd}
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
        <div id="career-history">
          <label htmlFor="company-name">Company: </label>
          <p id="company-name" name="company-name">
            {this.state.companyName}
          </p>
          <label htmlFor="company-position">Position: </label>
          <p id="company-position" name="company-position">
            {this.state.companyPosition}
          </p>
          <label htmlFor="company-tasks">Description of Tasks: </label>
          <p id="company-tasks" name="company-tasks">
            {this.state.companyTasks}
          </p>
          <label htmlFor="company-start">Start Date: </label>
          <p id="company-start" name="company-start">
            {this.state.companyStart}
          </p>
          <label htmlFor="company-finish">End Date: </label>
          <p id="company-end" name="company-end">
            {this.state.companyEnd}
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceForm;
