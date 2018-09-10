import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage'
import ScrollTop from './components/ScrollTop'

class App extends Component {
  render() {
    return (
      <div className="App">

      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <ScrollTop />
      </div>
    );
  }
}

export default App;
