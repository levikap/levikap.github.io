import React, { Component } from 'react'

class Work extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="SectionTitle">Software Engineer Co-op, Veracode</div>
            <div className="paragraph">In the Spring of 2020, I worked full-time as a Co-op at Veracode,
            a SaaS application security company. While there, I worked on the Static Platform Team, which
            involved creating features and maintaining the microservice architecture for clients to upload
            static (i.e. not currently live) code, for it to then be scanned for security vulnerabilities.
            While at Veracode, I upgraded the code to Java 11, added Pendo support, fixed numerous bugs,
            and created an AWS Lambda service to determine the health of the system.</div>
             <br></br>
            <div className="SectionTitle">Research Assistant Co-op, Northeastern University</div>
            <div className="paragraph">I participated in a full-time research Co-op in the Spring of
            2021, working under the supervision of Dr. Alan Mislove and Dr. Piotr Sapiezynski.
            During my six month Co-op, I performed research on the fairness of data collection by Experian,
            a prominent data broker. I am head author of the paper that came out of this research, <i>
            Measuring Biases in a Data Broker's Coverage</i>. In addition to this research project, I began work on
            the StyleGAN Ad Delivery research project, which I am currently working on part time.</div>

        </div>
    )
    }
}

export default Work
