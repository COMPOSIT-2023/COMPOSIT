import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Event Details</h1>
                    <span>Are you ready to participate?</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li>Event Details</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;