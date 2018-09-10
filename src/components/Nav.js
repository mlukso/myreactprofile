import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import { toElement as scrollToElement } from '../utils/scroll';



class Nav extends Component {
    
      scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
      }
    
  render() {
    return (
      <nav>
        <div className="menu">
          <Typography 
            className="menu-item"
            variant="title" 
            gutterBottom
            onClick={(e) => this.scrollToPage('.about-page')}
            style={{color: "#485564"}}
          >
            About
          </Typography>
          <Typography
            className="menu-item"
            variant="title" 
            gutterBottom
            onClick={(e) => this.scrollToPage('.project-page')}
            style={{color: "#485564"}}
          >
            Projects
          </Typography>
        </div>
      </nav>
    );
  }
}

export default Nav;
