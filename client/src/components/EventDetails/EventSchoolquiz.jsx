import React from 'react';
import { Link } from 'react-router-dom';
 
class EventSchoolquiz extends React.Component {
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
                                <h4>School Quiz</h4>
                                <h3>Win Exciting Gifts and Merchandise</h3>
                                {/* <span>12000</span> */}
                            </div>
                            
                        </div>
                        <div className="col-lg-13">
                    <div className="btn-box" style={{marginBottom: "20px"}}>
                        <Link to="#" className="btn btn-primary">Problem Statement</Link>
                        <a href = "https://docs.google.com/document/d/1PmfSq70_ktIbbJ4Ip_ff3FGYK0XQmtxeuGxV2CWzWEc/edit?usp=sharing" target="_blank" className="btn btn-secondary">Rules & Regulations</a>
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
                                                        <h3>School Quiz</h3>

                                                        <p>A quiz held for curious school kids from class 9 to class 12 to get exposed to the immense pool of cognizance lying ahead, showcase their talent and win back exciting prizes. Questions can involve logic reasoning puzzles, general science and math questions and more. Register now and compete with sharp minds from all over the country!</p>

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
                                                            <li> Team participation is allowed for students of class 9 to class 12, up to a maximum of 2 members. </li>
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
                                                        <p>The event will be conducted offline by a quiz master. The team must complete registration before the deadline in order to take part.</p>
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
                                                            <li><b>Deadline for registration:</b></li>
                                                            <li><i className="icofont-wall-clock"></i> On-spot, upto the event</li>
                                                            <br></br>
                                                            <br></br>
                                                            <li><b>Final Quiz:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>31st March 2023</li>
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
 
export default EventSchoolquiz;