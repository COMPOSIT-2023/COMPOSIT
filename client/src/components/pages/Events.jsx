import React from 'react';
import MainBanner from '../Events/MainBanner';

import WhyUs from '../Common/WhyUs';
import Footer from '../Common/Footer';
class AboutPage extends React.Component {
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
            <React.Fragment>
                {/* Main Banner */}
                <MainBanner />
                
                {/* Why Choose Us Area */}
                <WhyUs />
                {/* Why Choose Us Area */}
                <WhyUs />
                

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default AboutPage;