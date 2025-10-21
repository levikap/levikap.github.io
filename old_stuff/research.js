import React, { Component } from 'react'
import AlgColor from '../assets/alg_dont_see_color.pdf';
import StyleGAN from '../assets/stylegan_paper.pdf';
class Research extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="about">
           <div className="SectionTitle"><a href={StyleGAN} target="_blank"><u>Measurement and Analysis of Implied Identity in Ad Delivery Optimization</u></a></div>
            <div className="paragraph">
            In this project, my research group wondered how Facebook’s algorithm changes the delivery of an ad depending on 
            the race, gender, and age of a person appearing in that ad. 
            Prior studies have shown that the image in the ad by itself has a powerful effect on its delivery. 
            An image related to bodybuilding is delivered almost exclusively to men, 
            and another image related to makeup is delivered almost exclusively to women, 
            even when both ads are targeting an identical, gender-balanced audience. 
            We speculated: would a similar skew also be present when changing the demographics of people appearing in the ad?
            <br></br>
            &emsp;For our study, we collected stock photos of Black people and white people of different ages and genders. 
            To control for noise introduced by varied facial expressions, postures, backgrounds, and clothing, 
            we also developed a novel methodology to create consistent computer-generated faces using StyleGAN. 
            After running these two sets of ads, we found the following results: images of Black people were delivered 
            significantly more to Black Facebook users when compared to images of white people; 
            images of older people are delivered much more to older Facebook users; images of children are delivered 
            much more to women; and images of teen women are delivered much more to older men. 
            We performed a second experiment, which involved adding both a background to the image and link to a job site 
            for different jobs, such as “Artificial Intelligence” or “Lumber.” 
            We found that, consistent with prior work, ads in different industries show significant differences along racial 
            and gender lines, such as janitorial ads being delivered disproportionately to Black women. 
            We also found a congruent skew along racial lines, which means that images with Black people in the 
            ad are more likely to be delivered to Black users, with the amount of skew varying depending on the job. 
            Our findings are significant in showing the effect that the image of a person placed in an ad has on its delivery. 
            We show that including historically underrepresented groups in ads can help to show that ad to more diverse audiences, 
            which could help to reverse inequities, although the type of job does influence which audience that ad is shown to. 
            Conversely, a non-diverse ad could be more harmful than previously thought, because in addition to prior research 
            showing minority individuals being less responsive to these ads, the ad platform may not even show these ads to them 
            to begin with. Additionally, our finding that images of children are delivered more to women can 
            reinforce certain stereotypes, and images of young women being delivered mostly to men could run counter to diversity 
            goals an advertiser may have when deciding to include pictures of women in their ads. 
            Our results show the importance of carefully considering the biases that a system may have, 
            as nefarious harms can present themselves in subtle ways.
            <br></br>
            &emsp;I presented this work at the Internet Measurement Conference 2022, where it was awarded the Best Paper Award.
            <br></br>
            <div className="SubsectionTitle">Press Coverage</div>
              <div className="paragraph">Gizmodo: 
              <br></br>
                &emsp;
                  <a href="https://gizmodo.com/facebook-meta-photos-ads-race-gender-age-study-1849706492">
                <u>Facebook Segments Ads by Race and Age Based on Photos Whether Advertisers Want It or Not, Study Says</u>
                  </a>
            </div>

            </div>
            <br></br>
            
             <br></br>
            <div className="SectionTitle">Data Deserts and Black Boxes</div>
            <div className="paragraph">
              &emsp;My work on this project involved investigating the fairness and equality of a prominent data broker. 
              We wondered whether the coverage and accuracy of their data were equal among different demographic and socioeconomic groups, 
              which is vitally important because data broker data is used to verify people as part of background checks for housing and employment. 
              It has been reported that a lack of coverage has led to being given higher prices for insurance and disadvantageous loans, 
              and being denied access to jobs, homes, and COVID-19 vaccines. 
              To investigate the coverage and accuracy of their data, we purchased information from the data broker that was available in public voter records, 
              enabling us to compare Experian’s data to ground-truth voter record information. 
              We were interested in whether voters in disadvantaged socioeconomic groups were particularly impacted by lower coverage and accuracy in their data. 
              We found that ethnic minorities, young people, and those living in lower income areas were less likely to appear in the database; 
              if they were, their data were more likely to be inaccurate. 
              Additionally, we used regression to show that, even holding constant an individual’s age and gender, and local poverty rates, ethnic minorities still have lower coverage. 
              Our results suggest that marginalized groups could be disadvantaged in passing background checks or applying for mortgages and other loans.	
              This work was accepted to Management Science.</div>
            <br></br>


            <div className="SectionTitle"><a href={AlgColor} target="_blank"><u>Algorithms that "Don't See Color"</u></a></div>
            <div className="paragraph">
              &emsp;This research involved looking into Facebook's delivery of federally protected advertisements.
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
            <div className="SubsectionTitle">Press Coverage</div>
              <div className="paragraph">Governor Lael Brainard for the Federal Reserve: 
              <br></br>
                &emsp;
                  <a href="https://www.federalreserve.gov/newsevents/speech/brainard20210112a.htm">
                <u>Supporting Responsible Use of AI and Equitable Outcomes in Financial Services</u>
                  </a>
            </div>
            <div className="paragraph">ProPublica: 
              <br></br>
              &emsp;
                <a href="https://www.propublica.org/article/facebook-ads-can-still-discriminate-against-women-and-older-workers-despite-a-civil-rights-settlement">
              <u>Facebook Ads Can Still Discriminate Against Women and Older Workers, Despite a Civil Rights Settlement</u>
                </a>
            </div>
            <br></br><br></br>
        </div>
    )
    }
}

export default Research
