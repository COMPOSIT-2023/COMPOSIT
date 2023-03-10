import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Event Details</h1>
                    <span>Are you ready to participate?</span>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;