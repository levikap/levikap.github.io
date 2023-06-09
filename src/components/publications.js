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
            <div className="SubsectionTitle">2022</div>
            <div className="SubsectionTitle"><a href="https://dl.acm.org/doi/abs/10.1145/3514094.3534135"><u>"Algorithms that" Don't See Color":
            Comparing Biases in Lookalike and Special Ad Audiences."</u></a></div>
            <div className="paragraph"> Piotr Sapiezynski, Avijit Ghosh, <b>Levi Kaplan</b>, Aaron Rieke, and Alan Mislove. 2022. Algorithms that "Don't See Color": Measuring Biases in Lookalike and Special Ad Audiences. In Proceedings of the 2022 AAAI/ACM Conference on AI, Ethics, and Society (AIES '22). Association for Computing Machinery, New York, NY, USA, 609–616. https://doi.org/10.1145/3514094.3534135
              <div className="link">
                <a href="https://dl.acm.org/doi/abs/10.1145/3514094.3534135">
                  ACM
                </a>
              </div>
              <div className="link">
                <a href={Paper} target="_blank">
                  PDF
                </a>
              </div>
              </div>
        </div>
    )
    }
}

export default Publications
