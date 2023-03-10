import React from 'react';
import { Link } from 'react-router-dom';
 
class EventDetails extends React.Component {
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
                                <h3><Link to="#">Steven Smith</Link></h3>
                                <span>Lead Designer</span>
                            </div>
                            
                        </div>
                        <div className="col-lg-13">
                    <div className="btn-box" style={{marginBottom: "20px"}}>
                        <Link to="#" className="btn btn-primary">Problem Statement</Link>
                        <Link to="#" className="btn btn-secondary">Apply for Accomodation</Link>
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
                                            FAQs
                                            
                                        </Link> 
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab5')}>
                                        <Link to="#">
                                            Rules
                                            
                                        </Link> 
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab6')}>
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
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author" 
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Riley</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author" 
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Gilbert</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Brian</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab4" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Roberto</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-12">
                            <div className="btn-box">
                                <Link to="#" className="btn btn-primary">Download Schedule (PDF)</Link>
                                <Link to="#" className="btn btn-secondary">Connect Via Instagram</Link>
                            </div>
                        </div> */}
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
 
export default EventDetails;