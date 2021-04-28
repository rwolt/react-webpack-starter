import React, { Component } from 'react';
import Info from './components/PersonDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <div className="input-panel">
          <Info />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
