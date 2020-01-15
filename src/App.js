import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import MainSideNav from './components/MainSideNav'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NextSectionArrow from './components/NextSectionArrow'

const pages = ['about', 'portfolio', 'contact']

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSection : 0
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollScreen = Math.floor((parseInt(window.scrollY) + 50) / parseInt(window.innerHeight))
    this.setState({currentSection : scrollScreen})
  }

  render = () => (
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
        {this.state.currentSection < pages.length -1 ? 
          (<NextSectionArrow currentsection={pages[this.state.currentSection + 1]} />) 
        : 
          (<></>)
        }
        
      </div>
    </div>
  );
}

export default App;
