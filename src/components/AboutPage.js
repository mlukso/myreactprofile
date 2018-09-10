import React, { Component } from 'react';
import '../App.css';
import '../profile.png'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import ScrollToNext from './ScrollToNext';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-wrapper">
            <Typography className="about-title" variant="title" style={{color: "#485564"}} gutterBottom>
                About me
            </Typography>
            <div className="about-content">
              <img 
                alt="sweet profile pic"
                src={require('../profile.png')} 
                style={{
                  width: 200, 
                  height: 200, 
                  borderRadius: 200, 
                  filter: 'grayscale(100%)',
                  padding: 20
                  }}/>
                <p>  
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>        
              </div>                  

            </div>
        <ScrollToNext pageSelector=".project-page"/>
      </div>
    );
  }
}

export default About;