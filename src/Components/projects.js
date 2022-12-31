import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  let myStyle = {
    backgroundColor: "rgba(8, 7, 10,0.9)",
    color: "white",
    border: "White",
    borderRadius: "3.7%",
    fontFamily: "Prosto one",
  };
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="MyProjectsHeading text-center" data-aos="fade-down">
          My Projects
        </h1>
        <div className="container-sm accordium1" data-aos="fade-up">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={myStyle}
                >
                  Personal Portfolio Website
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <ul>
                    <li>
                      Created This Responsive And Interactiv Pesonal-Portfolio
                      Website For Myself
                    </li>
                    <li>
                      Made the Website Responsive Using Bootstrap and FlexBox
                    </li>
                    <li>
                      Used React.js to make the Website Interactive And
                      User-friendly
                    </li>
                    <li>
                      Implemented Various Mordern UIs Such as Smooth
                      Scrolling,Auto Sliding and Animated Scrolling With The
                      Help of React to make the Website UI atractive and
                      eye-catching
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={myStyle}
                >
                  Investment Banking Experience Program
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <ul>
                    <li>
                      Currently working on a Case study of Start-up Founder
                      Profiling, analysing the current Dynamics of the market
                      and deciding on which sector should an Founder mainly
                      focus while approaching an investor
                    </li>
                    <li>
                      Doing a Assessment of Investment Proposals, Milestones and
                      Performance Benchmarks that can be set during Private
                      Equity investments and Financing Options and Tools used
                      during PE investments.
                    </li>
                    <li>
                      Setting up a Private Equity Fund, which will be covering
                      Fundraising and Pitching to HNIs and Family Offices,
                      Process of Scouting the Market for High Potential Startups
                      and Investing in Startups.
                    </li>
                    <li>
                      Studying the various Exit Strategies followed by PE Funds
                      and implementing them on real-life based case-studies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={myStyle}
                >
                  Stock-Price-Predictor
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <ul>
                    <li>
                      Created a stock predicting system using LSTM artificial
                      neural network having four hidden layers and trained it
                      using adam optimiser and Mean-Squared loss function
                    </li>
                    <li>
                      Used tensorflow,keras and numpy to create and train the
                      neural network
                    </li>
                    <li>
                      Used Pandas, to extract the data from the .csv file which
                      was obtained from yahoo finance
                    </li>
                    <li>
                      Analysed the stock-price of HDFC Bank from 2017-2021 and
                      used the data to predict the stock price for the year
                      2021-22 and compared it with the actual prices for the
                      same.
                    </li>
                    <li>The final graph was plotted using Matplotlib</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                  style={myStyle}
                >
                  Precipitation Predictions System
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <ul>
                    <li>Coming Soon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
