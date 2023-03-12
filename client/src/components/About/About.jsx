import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';

class About extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render() {
        return (
            <section className="about-area ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Join The Event</span>
                                <h2>About Us</h2>

                                <p>With Science and Technology running in the veins of today’s generation determined to push their talents to the edge only to take flight, COMPOSIT provides the perfect platform to knit those aspirations into a skyful of opportunities. Being one of the largest fests in the genre all over India, COMPOSIT, an abbreviation of Congress of Metallurgical Professionals involving Students, Industry, and Teachers, is one of India’s largest Materials Science Fest conducted by the Society of Metallurgical Engineers (SME), Indian Institute of Technology Kharagpur. It is a unique congregation of students, professionals, academicians, and eminent personalities sharing the belief that materials will define the next revolution, a path-breaking concept to compile and share knowledge and enthusiasm for the development of ‘The Science of Materials.</p>

                                <p>Starting in 1994, It is a national congregation of bright and ambitious minds to invoke their innovation and bridge their ingenious thoughts and ideas into exorbitant assets for humanity. It also gives the young enthusiasts a chance to explore and showcase their talents and also interact with the stalwarts in the field who share their expertise. Compelled by the thirst for knowledge and adventure the exuberant minds, IIT Kharagpur is all set to conduct yet another edition of COMPOSIT, which promises an exciting odyssey embracing a plethora of events and all its trademark features.</p>

                                
                                <h2>Theme Description</h2>
                                <p>
                                    January 28, 1986, the Space Shuttle Challenger broke apart 73 seconds into its flight, killing all seven crew members aboard and causing a whooping $3.7 Billion loss due to the mere failure of the two O-ring seals in a joint in the shuttle's right solid rocket booster. Year after year, the realisation that material science is the dorsum of the augmenting space endeavours is coagulating in the scintillating brains.
                                </p>
                                <p>
                                    Comprehending the need of the times, India being a part of the top five nations in the world leading space agencies all across the globe, motivates extensive research in the field of space science, of which material science is an integral part. The 28th edition of COMPOSIT aims to celebrate the glory of materials science with the theme of ________.
                                </p>
                                <p>
                                    To untangle your latent ideas and make you apprised of the astounding saga of the blend of things and nothing, COMPOSIT is back with a bang welcoming you to one of the most insightful scientific conferences and 3-day long fun and engrossing experience with immense knowledge showcasing and the trade-off between the brilliant minds in presence.
                                </p>
                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="signature" />
                                </div>

                                <Link to="/about-1" className="btn btn-primary">
                                    Read More
                                    <i className="icofont-double-right"></i>
                                </Link>

                                <Link to="#" className="btn btn-secondary">Buy Ticket</Link> */}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/crowd about 3.jpeg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/crowd about 1.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                {/* <LaxButton buttonText="Explore More About" /> */}
                            </div>
                            <div className="about-image2">
                                <img src={require("../../assets/images/about22.jpg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/slideshow-bg4.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                {/* <LaxButton buttonText="Explore More About" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;