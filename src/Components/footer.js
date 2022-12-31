import React from "react";

export default function footer() {
  let style = { backgroundColor: "rgba(0, 0, 0, 0.2)" };
  return (
    <>
      <footer className="bg-dark text-center text-white" id="footer">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 text-center"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          <section className="mb-4">
            <p>
              Thanks For Visiting My Website.I hoped You Liked it <br />
              You Can Connect With Me On Social Media
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-2 mb-1 mb-md-0">
                <h5 className="text-uppercase">Connect With Me</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="https://www.facebook.com/Sandipan.Das.56789"
                      className="text-white"
                    >
                      Follow Me On Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sandipan-das-453748224/"
                      className="text-white"
                    >
                      Follow me on LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Follow Me On Github
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Follow Me on Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={style}>
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MyPotfolio-Website
          </a>
        </div>
      </footer>
    </>
  );
}
