import React from "react";
import bgi from "../images/bgi.jpg";
import "../App.css";
import Typewriter from "typewriter-effect";

export default function content() {
  return (
    <>
      <section className="contain" id="/">
        <img src={bgi} className="banner" alt="" />
        <div className="box">Welcome to my portfolio</div>
        <h1 className="bannertext">
          Hey there, I am <span> Sandipan </span>
        </h1>
        <h3 className="bannertext2">
          <Typewriter
            options={{
              strings: [
                "I am a Enginnering Under-grad,a Finance-Enthusiast and a front-end developer,",
                "I am also interseted in machine learnig and competitive programming ",
              ],
              pauseFor: 2000,
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
            }}
          />
        </h3>
      </section>
    </>
  );
}
