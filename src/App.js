import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainSideNav from './components/MainSideNav'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App" 
      style={{
        width : "100%", 
        display : "flex", 
        flexDirection : "row"
      }}>
      <MainSideNav />
      <div style={{height: '100%', width: "100%"}}>
        <AboutMe id="about" />
        <Portfolio id="portfolio" />
        <Contact id="contact"/>
      </div>
    </div>
  );
}

export default App;
