import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceHistory: [<ExperienceForm key={uniqid()} />],
    };

    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    this.setState({
      experienceHistory: this.state.experienceHistory.concat(
        <ExperienceForm key={uniqid()} />
      ),
    });
  }

  render() {
    return (
      <div id="experience" className="container">
        <div className="section-title">Experience</div>
        {this.state.experienceHistory.map((item) => item)}
        <button className="addSectionButton" onClick={this.addSection}>
          Add Section
        </button>
      </div>
    );
  }
}

export default Experience;
