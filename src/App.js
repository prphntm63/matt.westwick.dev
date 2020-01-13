import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainSideNav from './components/MainSideNav'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App" style={{display : "flex", flexDirection : "row"}}>
      <MainSideNav />
      <div style={{height: '100%'}}>
        <AboutMe id="about" />
        <Portfolio id="portfolio" />
        <Contact id="contact"/>
      </div>
      {/* <header className="App-header" style={{flexGrow : 1}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
