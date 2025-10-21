import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faGraduationCap)

class Social extends Component {

  render() {

    return(
      <div class="social">
        <div class="icon">
          <a href="https://github.com/levikap" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        </div>
        <div class="icon">
          <a href="https://www.instagram.com/levi_takes_photos/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
        <div class="icon">
          <a href="https://www.linkedin.com/in/levi-kaplan" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
        </div>
        <div class="icon">
          <a href="https://scholar.google.com/citations?user=688OVAwAAAAJ&hl=en&authuser=1" target="_blank"><FontAwesomeIcon icon="graduation-cap" /></a>
        </div>
      </div>
    )
  }
}

export default Social
