import React, { Component } from 'react';
import General from './components/General';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <General />
      </div>
    );
  };
}

export default App;
