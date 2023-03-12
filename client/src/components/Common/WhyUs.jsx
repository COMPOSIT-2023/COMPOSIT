import React from 'react';
import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon" style={{textAlign:"center"}}>
                                            <i className="icofont-headphone-alt-1"></i>
                                        </div>
                                        <h3>Competitions</h3>
                                        <p>A multitude of events ranging from mesmerizing data analytics, stunning photography, compelling case studies and engaging research competitions, unleashing your full potential and developing a spirit of healthy competitiveness.</p>
            
                                        {/* <Link to="#" className="btn btn-primary">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon" style={{textAlign:"center"}}>
                                            <i className="icofont-network-tower"></i>
                                        </div>
                                        <h3>Guest Lectures</h3>
                                        <p>Deliverance of guest lectures by eminent professionals in the field of Materials Science, enriching your learning experience and broadening your horizons.</p>
            
                                        {/* <Link to="#" className="btn btn-primary">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon" style={{textAlign:"center"}}>
                                            <i className="icofont-users-social"></i>
                                        </div>
                                        <h3>Workshops</h3>
                                        <p>Conductance of informative workshops on captivating concepts, providing you with hands-on experience and practical knowledge about cutting-edge research and innovations in the field of materials and beyond.</p>
            
                                        {/* <Link to="#" className="btn btn-primary">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon" style={{textAlign:"center"}}> 
                                            <i className="icofont-wink-smile"></i>
                                        </div>
                                        <h3>Webinars</h3>
                                        <p>A plethora of engrossing webinars, providing a platform to interact with prominent persnoalities including Material Scientists and Professionals from all across the globe and to gain valuable insights about the field of Materials Science and beyond.</p>
            
                                        {/* <Link to="#" className="btn btn-primary">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className='slideshow'>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </section>
        );
    }
}
 
export default WhyUs;