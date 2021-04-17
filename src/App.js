import React, { Component } from 'react';
import Info from './components/PersonDetails';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div>
        <Info />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
