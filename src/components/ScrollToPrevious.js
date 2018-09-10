import React, { Component } from 'react';
import { toElement as scrollToElement } from '../utils/scroll';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-previous" onClick={(e) => this.scrollToPrevious()}>
        <div className="arrow bounce">
          <div className="scroll-text">Click Me</div>
          <i className="fas fa-chevron-up fa-2x" href="#" />
        </div>
      </div>
    );
  }
}

export default ScrollToPrevious;