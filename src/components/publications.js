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
            <div className="SubsectionTitle">2019</div>
            <div className="SubsectionTitle"><a href="https://arxiv.org/pdf/1912.07579.pdf"><u>"Algorithms that" Don't See Color":
            Comparing Biases in Lookalike and Special Ad Audiences."</u></a></div>
            <div className="paragraph"> Sapiezynski, Piotr, Avijit Ghosh, <b>Levi Kaplan</b>, Alan Mislove,
             and Aaron Rieke. "Algorithms that" Don't See Color":
             Comparing Biases in Lookalike and Special Ad Audiences."
              arXiv preprint arXiv:1912.07579 (2019).
              <div className="link">
                <a href="https://arxiv.org/abs/1912.07579">
                  Arxiv
                </a>
              </div>
              <div className="link">
                <a href={Paper} target="_blank">
                  PDF
                </a>
              </div>
              </div>
             <br></br>
             <div className="SubsectionTitle">2021</div>
             <div className="SubsectionTitle">Measuring Biases in a Data Broker's Coverage</div>
             <div className="paragraph"><b>Levi Kaplan</b>, Alan Mislove, and Piotr Sapieżyński.
             "Measuring Biases in a Data Broker’s Coverage." (2021).</div>

        </div>
    )
    }
}

export default Publications
