import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import ScrollToPrevious from './ScrollToPrevious';

class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <main>
        <Typography className="intro" variant="title" style={{color: "#485564"}} gutterBottom>
            Some of my projects... clearly more to do here
        </Typography>
        </main>
        <ScrollToPrevious pageSelector=".about-page" />
      </div>
    );
  }
}

export default ProjectPage;