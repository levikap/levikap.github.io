import React, { Component } from 'react'
import Paper from '../assets/alg_dont_see_color.pdf';

class Publications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="SectionTitle">Published Papers</div>
            <div className="SubsectionTitle">2023</div>
            <div className="SubsectionTitle">Data Deserts and Black Boxes: The Impact of Socio-Economic Status on Consumer Profiling</div>
            <div className="paragraph">&emsp;Nico Neumann, Catherine Tucker, <b>Levi Kaplan</b>, Alan Mislove, and Piotr Sapiezynski.</div>
            <div className="paragraph">&emsp;To be published in Management Science.</div>
            <br></br>
            <br></br>


            <div className="SubsectionTitle">2022</div>
            <div className="SubsectionTitle"><a href="https://dl.acm.org/doi/10.1145/3517745.3561450"><u>Measurement and Analysis of Implied Identity in Ad Delivery Optimization</u></a></div>
            <div className="paragraph"><b>Awards:</b> Best Paper Award, IMC 2022</div>
            <div className="paragraph">&emsp;<b>Levi Kaplan</b>, Nicole Gerzon, Alan Mislove, and Piotr Sapiezynski. "Measurement and analysis of implied identity in ad delivery optimization." In Proceedings of the 22nd ACM Internet Measurement Conference, pp. 195-209. 2022.</div>
            <br></br>


            <div className="SubsectionTitle"><a href="https://dl.acm.org/doi/abs/10.1145/3514094.3534135"><u>Algorithms that "Don't See Color":
            Comparing Biases in Lookalike and Special Ad Audiences</u></a></div>
            <div className="paragraph"><b>Awards:</b> Runner-up, Best Student Paper Award, ConPro 2022</div>
            <div className="paragraph">&emsp;Piotr Sapiezynski, Avijit Ghosh, <b>Levi Kaplan</b>, Aaron Rieke, and Alan Mislove. 2022. Algorithms that "Don't See Color": Measuring Biases in Lookalike and Special Ad Audiences. In Proceedings of the 2022 AAAI/ACM Conference on AI, Ethics, and Society (AIES '22). Association for Computing Machinery, New York, NY, USA, 609–616. https://doi.org/10.1145/3514094.3534135
              
              </div>
        
    
    </div>

    )
    }
}

export default Publications
