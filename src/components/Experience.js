import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceHistory: [<ExperienceForm key={uniqid()} />],
      collapsed: true,
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
      <div
        id="experience"
        className="container"
        onClick={() => this.setState({ collapsed: !this.state.collapsed })}
      >
        <div className="section-title">Experience</div>
        {!this.state.collapsed
          ? this.state.experienceHistory.map((item) => item)
          : ''}
      </div>
    );
  }
}

export default Experience;
