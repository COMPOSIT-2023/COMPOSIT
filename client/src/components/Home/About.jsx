import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {
    
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
            <section className="about-area ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Join The Event</span>
                                <h2>Motto and Vision</h2>
                                <p>Materials science has shaped the development of civilizations since the dawn of mankind. From the atomic level to high engineering structures or the greatest space endeavors, material science is intrinsically diffused in every aspect of human advancement. </p>
                                
                                <p>With the aim of raising consciousness on materials science across the nation, COMPOSIT strives to nurture and enrich interest in material science and metallurgy among the students of the nation and explore tremendous possibilities of future applications of materials science in space technology due to their multi-functionality and diverse properties. It furnishes a chance for entrepreneurs, industrialists, teaching professionals, and students to experience the wide beauty and nature of materials. We seek to spread awareness about material science-driven innovation in research and industry in everything from aerospace to medicine.</p>

                                

                                <Link to="/about" className="btn btn-primary">
                                    Read More 
                                    <i className="icofont-double-right"></i>
                                </Link>

                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/about5.jpg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;