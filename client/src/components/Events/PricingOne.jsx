import React from 'react';
import { Link } from 'react-router-dom';
 
class PricingOne extends React.Component {
    render(){
        return (
            <section className="pricing-area ptb-120 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Competitions</h3>
                               {/* <div className="price-value"><sup>$</sup>59</div>*/}
                                </div>
                                
                                <ul className="pricing-content">
                                <p>A multitude of events ranging from mesmerizing data analytics, stunning photography, compelling case studies and engaging research competitions, unleashing your full potential and developing a spirit of healthy competitiveness.</p>
            
                                        
                                </ul>
                                
                                <Link to="#" className="btn btn-primary">READ MORE</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Guest Lectures</h3>
                                    {/*<div className="price-value"><sup>$</sup>89</div>*/}
                                </div>
                                
                                <ul className="pricing-content">
                                <p>Deliverance of guest lectures by eminent professionals in the field of Materials Science, enriching your learning experience and broadening your horizons.</p>
            
                                       
                                </ul>
                                
                                <Link to="#" className="btn btn-primary">READ MORE</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Workshops</h3>
                                    {/*<div className="price-value"><sup>$</sup>99</div>*/}
                                </div>
                                
                                <ul className="pricing-content">
                                <p>Conductance of informative workshops on captivating concepts, providing you with hands-on experience and practical knowledge about cutting-edge research and innovations in the field of materials and beyond.</p>
            
                                       
                                </ul>
                                
                                <Link to="#" className="btn btn-primary">READ MORE</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Webinars</h3>
                                    {/*<div className="price-value"><sup>$</sup>99</div>*/}
                                </div>
                                
                                <ul className="pricing-content">
                                <p>A plethora of engrossing webinars, providing a platform to interact with prominent persnoalities including Material Scientists and Professionals from all across the globe and to gain valuable insights about the field of Materials Science and beyond.</p>
            
                                         </ul>
                                
                                <Link to="#" className="btn btn-primary">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PricingOne;