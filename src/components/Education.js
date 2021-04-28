import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EducationForm from './EducationForm';
import AddSectionButton from './AddSectionButton';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
      eduArray: [<EducationForm key={uniqid()} />],
    };

    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    this.setState({
      eduArray: this.state.eduArray.concat(<EducationForm key={uniqid()} />),
    });
  }

  render() {
    return (
      <div id="education" className="container">
        <div className="section-title">Education History</div>
        {this.state.eduArray.map((item) => item)}

        <button className="addSectionButton" onClick={this.addSection}>
          Add Section
        </button>
      </div>
    );
  }
}

export default Education;
