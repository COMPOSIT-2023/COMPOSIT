import React from "react";
import { Link } from "react-router-dom";

class SpeakersOne extends React.Component {
  render() {
    return (
      <section className="speakers-area ptb-120">
        <div className="row m-0">
          <div className="section-title">
            <h2>
              Our<b> Faculty Advisors</b>
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/siddhartha.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Siddartha Roy</h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="https://www.facebook.com/gourivignesh.sjawalkar" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:siddhartha@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dr-ing-siddhartha-roy-b3972b7b/?originalSubdomain=in"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manasp.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Manas Paliwal </h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="https://www.facebook.com/gourivignesh.sjawalkar" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:manas.paliwal@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manas-paliwal-4ba3ab139/?originalSubdomain=in"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Our<b> Governer</b>
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/abhishek.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Abhishek Kumar</h3>
                <span>Governer</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Abhishekbhattacharyy"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:cvkumar.abhishek@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhishek-kumar-788413203/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Our<b> Heads</b>
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/gouri1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Gouri Vignesh Jawalkar</h3>
                <span>General Secretary</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/gourivignesh.sjawalkar"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:gourivigneshjawalkar@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gouri-vignesh-jawalkar-626258200/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/riyan.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Riyan Biswas</h3>
                <span>Student Coordinator & Finance Head</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:riyanbiswas@outlook.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/riyanbiswas20mt3fp21"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ishan.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ishan Gupta</h3>
                <span>Design Head</span>
              </div>
              <ul>
                {/* <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:ishangupta3210805@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ishan-gupta-367a75200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8amW4cktS7qYnPUXFo6m9A%3D%3D"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/karabi.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Karabi Saha</h3>
                <span>Events Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/karabi.saha.501598"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:skarabi119@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/karabisaha"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ramona.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ramona Kodkani</h3>
                <span>Events Head</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:ramonakodkani@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/priya1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Priya Kumari</h3>
                <span>Events Head</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:Priya.iitkgp01@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/priya-kumari-6554aa226"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/Nitishkumar.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Nitish Kumar</h3>
                <span>Guest Lecture and Webinar Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084202765673&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a href="#" target="_blank" className="twitter">
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nitish-kumar-92bb3822b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/harilalam1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Hari Prasad Lallam</h3>
                <span>Guest Lecture and Webinar Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/hari.p.l.351"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:lhariprasad21@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lalam-hari-prasad-b93820217/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/gourav.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Gourav Pathak</h3>
                <span>Publicity and Hospitality Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/gourav.pathak.969?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:gouravpathak2002.composit@gmail.com "
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gourav-pathak-727500203"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/hasitha.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Alluri Hasitha</h3>
                <span>Publicity and Hospitality Head</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="hasitha.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hasitha-alluri"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/prabodh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prabodh Kumar Singh</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:prabodhkumar.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/prabodh-singh-2b1a281ba"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/sudarshana.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Sudarshana Jaiswal</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                {/* <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:sudarshana.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sudarshanajaiswal"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/abyuday1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Abyuday Agarwal</h3>
                <span>Web Development Head</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:abhyudaya03@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhyuday-agrawal-8b0b7b211"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/Ananay.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ananay Singh</h3>
                <span>Web Development Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://m.facebook.com/100056792605310/"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:proficientbraniac@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ananaysingh"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="section-title">
            <h2>
              Our<b> Sub Heads</b>
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ujjawal.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ujjawal Kumar</h3>
                {/* <span>General Secretary</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100012980770787&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:ujjawalrr@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ujjawal-kumar-45a431228"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/mayuresh1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Mayuresh Lohani</h3>
                {/* <span>Student Coordinator</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075318804727&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:lohanimayuresh2551@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mayuresh-lohani-87b28922a"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/anurag.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Anurag Anand</h3>
                {/* <span>Publicity and Hospitality Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075827377228&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:anuragsr26@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anurag-anand-929471250"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/sara.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Sara N</h3>
                {/* <span>Publicitya and Hospitality Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075342979227"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:dkusarfa76@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sara-n-297218242/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/rakesh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Rakesh Tarendra</h3>
                {/* <span>Events Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/rakesh.tarendra?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:rakesh21mi@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rakesh-tarendra-b64a91226"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/mannan.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Mannan Thakur</h3>
                {/* <span>Events Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075348826076"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:Mannanthakur07@gmail.com "
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mannan-thakur-a7954b229"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/apurva1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Apurva Vikrant Ninave</h3>
                {/* <span>Events Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075492060476"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:apurvaninave24@kgpian.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="linkedin.com/in/apurva-ninave-052555229"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/nagarun.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>G.Nagarun</h3>
                {/* <span>Web Development Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/NAGARUN13"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:nagarngugulothupavan@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gugulothu-nagarun-18b216199/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manisha1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Manisha Sahoo</h3>
                {/* <span>Web Development Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075561559224&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:manishasahoo995@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manisha-sahoo-33186022b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/jaspreet.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Jaspreet Kaur</h3>
                {/* <span>Sponsorship Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075403122076"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:kjaspreet1510@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jaspreet-kaur-145570227/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/kartik.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Kartik Nahta</h3>
                {/* <span>Sponsorship Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/kartik.nahta.1?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:kartik.nht@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kartik-nahta-59017b240"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/soumili.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Soumili Mukherjee </h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100074879996578&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:soumilirupsa2020@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/soumili-mukherjee-a06730227"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/sagnik.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Sagnik Bhowmik</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075216262782"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:sagnik1.bhowmik@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sagnik-bhowmik-640782251/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/lavesh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Lavesh Kadam</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100090303981421&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:laveshkadam121003@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lavesh-kadam-b17631247"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/mayur.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Mayur Tank </h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009579871847&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:mayurtank4215@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="Whttps://www.linkedin.com/in/mayur-tank-0276a1225"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/harsh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Harshvardhan</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:neerajsharmasony@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="Www.linkedin.com/in/harshvardhan-4a76"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/abhiram.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Abhiram Kanchi</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009759752902&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:kanchiabhiram16@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhiram-kanchi-b8905522a"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/subhro.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Subhrojyoti Mukherjee</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073392733438"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:subhrojm@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/subhrojyoti-mukherjee-0b59b3226"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manas.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Manas Sharma </h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073379540212"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:manassharma.ms2593@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manas-sharma-229070205/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/rashmita.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Rashmita Sahoo</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/swetalina.sahoo.5661?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:rashmitasahoo2002@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rashmita-sahoo-a1803822b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/jagori.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Jagori Bandyopadhyay</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075209723780&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:jagori2002@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jagori-bandyopadhyay-b05760229"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/satyam.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Satyam Raj</h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/satyam.raj.17/"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:satyamraj85@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/satyam-raj-24437a226/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/shreyansh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Shreyansh Vansh Verma </h3>
                {/* <span>Guest Lecture and Webinar Head</span> */}
              </div>
              <ul>
                {/* <li>
                  <a
                    href="https://www.facebook.com/swetalina.sahoo.5661?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:biswaspinki.skv@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shreyansh-vansh-verma-86017526a"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpeakersOne;
