import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'
import { toTop as scrollToPageTop } from '../utils/scroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)



class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shouldShowScrollTopArrow: false
    };
  }
    
    handleScroll() {
      const boundingRect = ((document || {}).documentElement || {})
        .getBoundingClientRect;
      if (boundingRect) {
        if (document.documentElement.getBoundingClientRect().top * -1 > 100)
          this.setState({ shouldShowScrollTopArrow: true });
        else this.setState({ shouldShowScrollTopArrow: false });
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    
  render() {
    const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';
    return (
      <div className="scroll-top" onClick={(e) => scrollToPageTop()}>
        <div
          className={`arrow ${hideArrowClass}`}
        >
          <a className="animate-icons"><i className="fas fa-angle-double-up fa-2x" href="#" /></a>
          <div className="to-top">To Top</div>
        </div>
      </div>
    );
  }
}

export default ScrollTop;