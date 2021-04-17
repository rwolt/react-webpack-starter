import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EducationForm from './EducationForm';
import AddSectionButton from './AddSectionButton';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationHistory: [<EducationForm key={uniqid()} />],
      collapsed: true,
    };

    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    let eduForm = <EducationForm key={uniqid()} />;
    this.setState({
      educationHistory: this.state.educationHistory.concat(eduForm),
    });
  }

  render() {
    return (
      <div id="education" className="container">
        <div
          className="section-title"
          onClick={() => {
            this.setState({ collapsed: !this.state.collapsed });
          }}
        >
          Education History
        </div>
        {!this.state.collapsed
          ? this.state.educationHistory.map((item) => item)
          : ''}
      </div>
    );
  }
}

export default Education;
