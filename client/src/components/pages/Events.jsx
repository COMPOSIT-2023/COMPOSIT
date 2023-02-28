import React from 'react';
import MainBanner from '../Events/MainBanner';
import About from '../Events/About';
import WhyUs from '../Common/WhyUs';
import Footer from '../Common/Footer';
class EventPage extends React.Component {
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
                {/* About Area */}
                <About />
                {/* Why Choose Us Area */}
                <WhyUs />
                

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default EventPage;