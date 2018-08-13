import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello World!"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header title="Goodbye World!"/>
      </div>
    );
  }
}

export default App;
