import React, { Component } from 'react'
import headshot from '../assets/headshot.jpeg'
import Social from './social.js'
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
        <h3><i>Computer Science</i></h3>
        <br />
        <h4><b>Northeastern University</b></h4>
        <h4>kaplan.l@northeastern.edu</h4>
        <div className="downloadButton">
          <div className="downloadButtonBackground">
            <div className="downloadButtonText">
                <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:c1809935-afd3-47f7-b56a-2d8d021cc0fb#pageNum=1"  class="downloadButtonText">Download CV</a></div>
          </div>
        </div>
        <Social />
      </div>

    )
  }

}

export default SideBar