import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
 
class Speakers extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section className="speakers-area ptb-120 pb-0">
                <div className="container">
                    <div className="section-title">
                        <span>People Behind The Fest</span>
                        <h2>Meet Our Team</h2>
                        <div className="bar"></div>
                        <LaxDiv text="OURTEAM" dataPreset="driftRight" />
                        {/* <Link to="#" className="btn btn-primary">View More Speakers</Link> */}
                    </div>
                </div>

                <div className="row m-0">
                <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-speakers">
                            <img 
                                src={require("../../assets/images/gouri1.jpeg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Gouri Vignesh Jawalkar</h3>
                                <span>General Secretary</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/gourivignesh.sjawalkar" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                                <li>
                                    <a href="mailto:gourivigneshjawalkar@gmail.com" target="_blank" className="twitter">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/gouri-vignesh-jawalkar-626258200/" target="_blank" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-speakers">
                            <img 
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Riyan Biswas</h3>
                                <span>Student Coordinator</span>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Gourav Pathak</h3>
                                <span>Publicity and Hospitality Head</span>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Alluri Hasitha</h3>
                                <span>Publicitya and Hospitality Head</span>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/karabi.jpeg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Karabi Saha</h3>
                                <span>Events Head</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/karabi.saha.501598" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                                <li>
                                    <a href="mailto:skarabi119@gmail.com" target="_blank" className="twitter">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/karabisaha" target="_blank" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-speakers">
                            <img 
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Ramona Kodkani</h3>
                                <span>Events Head</span>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                <h3 style={{color:"#fec66d"}}>Priya Kumari</h3>
                                <span>Events Head</span>
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
                                    <a href="mailto:Priya.iitkgp01@gmail.com" target="_blank" className="twitter">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/priya-kumari-6554aa226" target="_blank" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-speakers">
                            <img 
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Abyuday Agarwal</h3>
                                <span>Web Development Head</span>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/Ananay.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Ananay Singh</h3>
                                <span>Web Development Head</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://m.facebook.com/100056792605310/" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                                <li>
                                    <a href="mailto:proficientbraniac@gmail.com" target="_blank" className="twitter">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ananaysingh" target="_blank" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="single-speakers">
                            <img 
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Prabodh Kumar Singh</h3>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/speakers1.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Sudarshana Jaiswal</h3>
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
                                    <a href="#" target="_blank" className="instagram">
                                        <i className="icofont-instagram"></i>
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
                                src={require("../../assets/images/Nitishkumar.jpg")} 
                                alt="speakers" 
                            />

                            <div className="speakers-content">
                                <h3 style={{color:"#fec66d"}}>Nitish Kumar</h3>
                                <span>Guest Lecture and Webinar Head</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100084202765673&mibextid=ZbWKwL" target="_blank" className="facebook">
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
                                    <a href="https://www.linkedin.com/in/nitish-kumar-92bb3822b" target="_blank" className="linkedin">
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
                                <h3 style={{color:"#fec66d"}}>Hari Prasad Lallam</h3>
                                <span>Guest Lecture and Webinar Head</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/hari.p.l.351" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                                <li>
                                    <a href="mailto:lhariprasad21@gmail.com" target="_blank" className="twitter">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/lalam-hari-prasad-b93820217/" target="_blank" className="linkedin">
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
 
export default Speakers;