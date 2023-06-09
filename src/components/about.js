import React, { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="paragraph">&emsp;Levi Kaplan is a second year PhD student at Northeastern University,
            advised by Dr. Alan Mislove. His research interests include studying the fairness and potential for bias 
            in social media platforms and the online advertising ecosystem through black-box auditing techniques and 
            investigating the ways in which these platforms can carry out discrimination through their algorithms. 
            <br></br>
            &emsp;Levi's work has been reported on in ProPublica and Gizmoto and cited by the Governor of the Federal Reserve.
            Additionally, his work documented issues in Facebook's housing advertisement delivery algorithm which led to 
            a landmark settlement between Facebook and the Department of Justice in the first case of algorithmic delivery 
            being challenged under the Fair Housing Act.


              </div>
             <br></br>
           <div className="SectionTitle">Education</div>
           <div className="paragraph"><b>Bachelors of Science in Computer Science, Northeastern University</b></div>

           <div className="paragraph">&emsp;Graduated Cum Laude in May 2022 with Honors
           </div>
        </div>
    )
    }
}

export default About
