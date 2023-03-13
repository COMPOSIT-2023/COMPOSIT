import React from 'react';
import { Link } from 'react-router-dom';
 
class EventTechtoon extends React.Component {
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }
    render(){
        return (
            <div className="event-details-area ptb-120">
            <section className="event-area bg-image ptb-120">
                <div className="col-lg-3 col-sm-6 p-0" style={{textAlign:"center"}}>
                        <div className="single-events">
                            <img src={require("../../assets/images/speakers2.jpg")} alt="Speaker" />

                            <div className="events-content">
                                <h4>Techtoon</h4>
                                <h3>Goodies to the top 5!</h3>
                                {/* <span>12000</span> */}
                            </div>
                            
                        </div>
                        <div className="col-lg-13">
                    <div className="btn-box" style={{marginBottom: "20px"}}>
                        <Link to="#" className="btn btn-primary">Problem Statement</Link>
                        <a href = "https://docs.google.com/document/d/1hkkGSfTFoFFgpTNe7VO6OQn6RBrEoCR1ToUcT097pEY/edit" target="_blank" className="btn btn-secondary">Rules & Regulations</a>
                    </div>
                </div>
                </div>

                
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                        className="current"
                                    >
                                        <Link to="#">
                                            About
                                        
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                        <Link to="#">
                                            Structure
                                            
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                        <Link to="#">
                                            Timeline
                                            
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                        <Link to="#">
                                            Contacts
                                            
                                        </Link> 
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Techtoon</h3>

                                                        <p>A non-technical online event. It is a fun-filled celebration of science and engineering, where creativity takes the center stage. A “techtoon” can be any creative, visual art on topics related to the themes (listed above) in the form of sketches, memes, cartoons, comics, etc. based on the following themes:  </p>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> Space technology</li><br />
                                                            <li><i className="icofont-wall-clock"></i> Science and Math</li><br />
                                                            <li><i className="icofont-wall-clock"></i> Enginnering</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Participation Criteria</h3>

                                                        <ul>
                                                            <li> Open to all </li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Rounds of the Event</h3>
                                                        <p>The event will have only one round as follows:</p>

                                                        <ul>
                                                            <li><b>Online Submission:</b>
                                                            <ul><li>Participants are expected to submit their work which depicts the theme in a humorous and creative way through the google form within the deadline. </li></ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Important Dates</h3>

                                                        <ul>
                                                            <li><b>Submission Deadline:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>30th March 2023</li>
                                                            <br></br>
                                                            <br></br>
                                                            {/* <li><b>Final presentation:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>31st March 2023, 11:59 PM</li> */}
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab4" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Contact Info</h3>

                                                        <p>Name: <i className="icofont-user-suited"></i> <b>User Name</b></p>
                                                        <p>Contact: <i className="icofont-phone-circle"></i> <b>8754326921</b></p>

                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1"><img src={require("../../assets/images/shapes/1.png")} alt="shape1" /></div>
                <div className="shape2 rotateme"><img src={require("../../assets/images/shapes/2.png")} alt="shape2" /></div>
                <div className="shape3 rotateme"><img src={require("../../assets/images/shapes/3.png")} alt="shape3" /></div>
                <div className="shape4"><img src={require("../../assets/images/shapes/4.png")} alt="shape4" /></div>
            </section>
            </div>
        );
    }
}
 
export default EventTechtoon;