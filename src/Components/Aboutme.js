import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aboutme() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <section className="aboutme" id="aboutme">
        <div className="container-s" id="AboutmeBox" data-aos="fade-right">
          <h2>About me</h2>
        </div>
        <div
          className="container-xl"
          id="Aboutme_Text-box"
          data-aos="fade-right"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ex
          possimus placeat dolorum quo cumque minima earum quas ipsam officia
          vero exercitationem, perspiciatis iusto doloribus nulla tempore vel
          perferendis ipsum!
        </div>
        <section className="contact_details-section" data-aos="fade-right">
          <div className="contact_details" id="phone">
            <h4>Phone</h4>
            <p>+91 9862107375</p>
          </div>
          <div className="contact_details" id="email">
            <h4 style={{ textalign: "center" }}>E-mail</h4>
            <p>sandipanclg2002@gmail.com</p>
          </div>
        </section>
      </section>
    </>
  );
}
