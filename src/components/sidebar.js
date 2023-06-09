import React, { Component } from 'react'
import headshot from '../assets/headshot.jpg'
import Social from './social.js'
import Pdf from '../assets/resume.pdf';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="sidebar">

        <div className="headshot">
          <img src={headshot} />
        </div>
        <h2>Levi Kaplan</h2>
        <h3><i>PhD Student, CS</i></h3>
        <br />
        <h4><b>Northeastern University</b></h4>
        <h4>kaplan.l@northeastern.edu</h4>
        <div className="downloadButton">
          <div className="downloadButtonBackground">
            <div className="downloadButtonText">
                <a href={Pdf} target = "_blank">Download CV</a></div>
          </div>
        </div>
        <Social />
      </div>

    )
  }

}

export default SideBar
