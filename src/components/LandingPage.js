import React, { Component } from 'react';
import '../App.css';
import SocialIcons from './SocialIcons'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import ScrollToNext from './ScrollToNext';
import Nav from './Nav'


class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
      <Nav />
        <div className="landing-page-main">
        <div className="intro-wrapper">
        <Typography className="intro" variant="title" style={{color: "#485564"}} gutterBottom>
            Hello, I'm Matt!
        </Typography>
            <Typography className="tagline" variant="subheading" style={{color: "#485564"}} gutterBottom>
                JavaScript Developer | SaaS & Tech Enthusiast | Taco Monster
        </Typography>
        <SocialIcons />
        </div>
        <ScrollToNext pageSelector=".about-page"/>
        </div>
      </div>
    );
  }
}

export default LandingPage;
