import React, { Component } from 'react'

class Publications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="paragraph">I am a Computer Science undergraduate student studying at Northeastern University
             in Boston, set to graduate in May 2022. I am an undergraduate research assistant
             supervised by Dr. Alan Mislove and Dr. Piotr Sapiezynski. My research has involved
             looking into fairness and privacy of various platforms and their algorithms or data
             systems. I am currently applying to Ph.D. programs and hope to matriculate at a
             Graduate School next fall.</div>
             <br></br>
            <div className="SectionTitle">Research Interests</div>
            <div className="paragraph">    I am broadly interested in studying the privacy,
            security, and fairness of various algorithms and data systems through auditing
            techniques. This also extends to studing methods for creating more fair, equitable,
            and transparent systems that protect user data and have robust protections against discrimination.</div>

        </div>
    )
    }
}

export default Publications
