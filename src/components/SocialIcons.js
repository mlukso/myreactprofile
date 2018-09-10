import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class SocialIcons extends Component {
  render() {
    return (
        <div className="icons-social">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mlukso/" className="animate-icons"><i className="fab fa-github-square"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matt-lukso/" className="animate-icons"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/luk50/" className="animate-icons"><i class="fab fa-instagram"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mluk50" className="animate-icons"><i class="fab fa-twitter"></i></a>
        </div>
    );
  }
}

export default SocialIcons;