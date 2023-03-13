import React from "react";
import { Link } from "react-router-dom";
import lax from "lax.js";
import OwlCarousel from "react-owl-carousel3";
import PlatinumSponsors from "../LaxButton/PlatinumSponsors";
import GoldSponsors from "../LaxButton/GoldSponsors";
import Footer from "../Common/Footer";

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

class Sponsor extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-title-area item-bg2">
          <div className="container">
            <h1>Sponsors</h1>
            <span>Check Who Makes This Event Possible!</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Sponsors</li>
            </ul>
          </div>
        </div>

        <section className="partner-area ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner-title gold-sponsor">
                  <GoldSponsors />
                </div>
              </div>

              <OwlCarousel
                className="gold-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    {/* <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                    </Link> */}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    {/* <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                    </Link> */}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://instagram.com/greysocialpopcorns?igshid=ZDdkNTZiNTM="
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/Grey Social Popcorn.png")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/Grey Social Popcorn.png")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    {/* <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                    </Link> */}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    {/* <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner5.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner5.png")} alt="Partner Logo" />
                                    </Link> */}
                  </div>
                </div>
              </OwlCarousel>

              <div className="col-lg-12">
                <div className="border"></div>
              </div>

              <div className="col-lg-12">
                <div className="partner-title platinum-sponsor">
                  <PlatinumSponsors />
                </div>
              </div>
              <OwlCarousel
                className="platinum-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://couponswala.com/" target="_blank">
                      <img
                        src={require("../../assets/images/Couponswala.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/Couponswala.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://ninthsem.com/" target="_blank">
                      <img
                        src={require("../../assets/images/ninthsem.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/ninthsem.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.jsw.in/" target="_blank">
                      <img
                        src={require("../../assets/images/jsw.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/jsw.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.infizeal.com/" target="_blank">
                      <img
                        src={require("../../assets/images/infizeal.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/infizeal.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.facebook.com/festPav/" target="_blank">
                      <img
                        src={require("../../assets/images/festpav1.png")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/festpav1.png")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.banyan.com/" target="_blank">
                      <img
                        src={require("../../assets/images/banyan.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/banyan.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.mycaptain.in/" target="_blank">
                      <img
                        src={require("../../assets/images/mycaptain.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/mycaptain.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://in.linkedin.com/company/twenty19-com"
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/tweenty-19.png")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/tweenty-19.png")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.teeshood.com/" target="_blank">
                      <img
                        src={require("../../assets/images/teeshood.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/teeshood.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://www.facebook.com/RadioVrishti/"
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/radio.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/radio.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://in.linkedin.com/company/brainweaveco"
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/brainweave.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/brainweave.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.azureskynet.com/" target="_blank">
                      <img
                        src={require("../../assets/images/azure.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/azure.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.jindalstainless.com/" target="_blank">
                      <img
                        src={require("../../assets/images/jsl.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/jsl.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.collegebol.com/" target="_blank">
                      <img
                        src={require("../../assets/images/collegebol1.png")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/collegebol1.png")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.ducom.com/" target="_blank">
                      <img
                        src={require("../../assets/images/ducom.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/ducom.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.robospecies.com/" target="_blank">
                      <img
                        src={require("../../assets/images/robo.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/robo.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.aptronnoida.in/" target="_blank">
                      <img
                        src={require("../../assets/images/aptron.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/aptron.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://www.facebook.com/thecollegefever/"
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/collegefever.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/collegefever.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.brainbuxa.com/" target="_blank">
                      <img
                        src={require("../../assets/images/brain.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/brain.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a
                      href="https://www.linkedin.com/company/leica-microsystems/about/"
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/leica.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/leica.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <a href="https://www.hsi.org/" target="_blank">
                      <img
                        src={require("../../assets/images/humane.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/humane.jpg")}
                        alt="Partner Logo"
                      />
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Sponsor;
