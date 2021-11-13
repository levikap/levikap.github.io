import React, { Component } from 'react'

class Research extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
            <div className="SectionTitle">Algorithms that "Don't See Color"</div>
            <div className="paragraph">
              This research involved looking into Facebook's delivery of federally protected advertisements.
              In 2019 following a settlement in court, Facebook agreed to remove demographic attributes
               from targeting options for the federally protected advertising categories of
               Housing, Credit, and Employment. This work sought to investigate the extent to which
               this technique of simply removing the demographic attributes actually reduced the algorithm
               delivering the ads to demographics at different rates.
               We found that the updated algorithm for delivering to protected advertising categories
               did little to reduce the demographic biases for gender, age, race, and political leanings.
               This suggests that merely removing demographic features from the inputs of real-world
               algorithmic systems can fail to remove biased outputs.
            </div>
            <br></br>
            <div className="SubsectionTitle">Paper</div>
              <div className="paragraph">
                <div className="link">
                  <a href="https://arxiv.org/pdf/1912.07579.pdf">
                    Arxiv
                  </a>
                </div>
              </div>
            <br></br>
            <div className="SubsectionTitle">Press Coverage</div>
              <div className="paragraph">Governor Lael Brainard for the Federal Reserve:
                <div className="link">
                  <a href="https://www.federalreserve.gov/newsevents/speech/brainard20210112a.htm">
                Supporting Responsible Use of AI and Equitable Outcomes in Financial Services
                  </a>
              </div>
            </div>
            <div className="paragraph">ProPublica:
              <div className="link">
                <a href="https://www.propublica.org/article/facebook-ads-can-still-discriminate-against-women-and-older-workers-despite-a-civil-rights-settlement">
              Facebook Ads Can Still Discriminate Against Women and Older Workers, Despite a Civil Rights Settlement
                </a>
                </div>
            </div>
             <br></br>
            <div className="SectionTitle">Measuring Biases in a Data Broker's Coverage</div>
            <div className="paragraph">This research paper sought to investigate whether there are demographic
            and socioeconomic disparities in the accuracy and coverage of a prominent Data Broker, Experian.
            Experian’s data is used to verify people as part of background checks for housing and employment,
            and it has been reported that a lack of coverage has led to being given higher prices for insurance,
            disadvantageous loans, and denied access to jobs, homes, and COVID-19 vaccines.
            If there exists disparate coverage and accuracy for minorities,
            this could serve to further exacerbate existing discriminatory systems. We found that ethnic minorities,
            young people, and those living in lower income areas were less likely to be in the database,
            and if they were, they were more likely to have inaccurate data.
            We plan to submit our findings to The Web Conference 2022.</div>

        </div>
    )
    }
}

export default Research
