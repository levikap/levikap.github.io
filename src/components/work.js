import React, { Component } from 'react'

class Work extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="SectionTitle">Software Engineer Co-op, Veracode</div>
            <div className="paragraph">In the Spring of 2020, Levi worked full-time as a Co-op at Veracode,
            a SaaS application security company. While there, he worked on the Static Platform Team, which
            involved creating features and maintaining the microservice architecture for clients to upload
            static (i.e. not currently live) code, for it to then be scanned for security vulnerabilities.
            While at Veracode, he upgraded the code to Java 11, added Pendo support, fixed numerous bugs,
            and created an AWS Lambda service to determine the health of the system.</div>
             <br></br>
            <div className="SectionTitle">Research Assistant Co-op, Northeastern University</div>
            <div className="paragraph">Levi participated in a full-time research Co-op in the Spring of
            2021, working under the supervision of Dr. Alan Mislove and Dr. Piotr Sapiezynski.
            During my six month Co-op, he performed research on the fairness of data collection by
            a prominent data broker. This research would eventually be published alongside collaborators from MIT
            and the Melbourne Business School in <i>Data Deserts and Black Boxes: The Impact of Socio-Economic Status 
            on Consumer Profiling</i>. In addition to this research project, he began work on research for 
            <i>Measurement and Analysis of Implied Identity in Ad Delivery Optimization</i>.</div>

        </div>
    )
    }
}

export default Work
