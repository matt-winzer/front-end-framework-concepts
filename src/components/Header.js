import React from 'react';
import logo from '../logo.svg';

function Header(props) {
  
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
      </header>
      <h1>Hello, Kevin</h1>
    </div>
  )

}

export default Header