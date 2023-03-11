import React from 'react';
import { Link } from 'react-router-dom';
 
class EventExcavate extends React.Component {
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
                                <h4>Excavate</h4>
                                <h3>Cash Prize worth 22K</h3>
                                {/* <span>12000</span> */}
                            </div>
                            
                        </div>
                        <div className="col-lg-13">
                    <div className="btn-box" style={{marginBottom: "20px"}}>
                        <Link to="#" className="btn btn-primary">Problem Statement</Link>
                        <a href = "https://docs.google.com/document/d/1mLuksnjxXddBKvUf-GstX0rRDAO2SRPNwZkhEO4GF7U/edit" target="_blank" className="btn btn-secondary">Rules & Regulations</a>
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
                                                        <h3>Excavate</h3>

                                                        <p>An event is to ignite the spark of curiosity among the participants in the field of Data Analytics and to introduce how data science can be used in the field of metallurgical and materials engineering. Any student pursuing a Science or Engineering degree from any of the engineering colleges in India is eligible to participate.</p>

                                                        {/* <ul>
                                                            <li><i className="icofont-wall-clock"></i> Electronic Materials and Nanotechnology, Computational Material Science</li>
                                                            <li><i className="icofont-wall-clock"></i> Advanced Materials and Functional Materials Biomaterials</li>
                                                            <li><i className="icofont-wall-clock"></i> Material Processes Physical, Extractive and Mechanical Metallurgy</li>
                                                        </ul> */}
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
                                                            <li> Team participation of a maximum of three is expected. </li>
                                                            <li> All members should be students pursuing a B.Tech/ BSc./ Dual/ MTech/ MSc degree in any college in India. </li>
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
                                                        <p>The event will have two rounds as follows:</p>

                                                        <ul>
                                                            <li><b>Knockout round (Online):</b>
                                                            <ul><li>An online round will be conducted on Kaggle and the teams which will have more accurate results will proceed in the 2nd round.</li></ul>
                                                            </li>
                                                            <br></br>
                                                            <br />
                                                            <li><b>Final Presentation Round:</b>
                                                            <ul><li>Presentation of the solution and the results before a panel of judges who will evaluate the teams based on their justification of the problem statement.</li></ul>
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
                                                            <li><b>Idea Submission Deadline:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>20th March 11;59PM</li>
                                                            <br></br>
                                                            <br></br>
                                                            <li><b>Final presentation:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>2nd April</li>
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
 
export default EventExcavate;