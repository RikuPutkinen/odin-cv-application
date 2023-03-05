import React, { Component } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Experience />
      </div>
    );
  };
}

export default App;
