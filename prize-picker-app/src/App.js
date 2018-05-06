import React, { Component } from 'react';
import pacLogo from './pac_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pacLogo} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
