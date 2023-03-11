import React from 'react';
import MainBanner from '../Home/MainBanner';
import About from '../Home/About';
import WhyUs from '../Common/WhyUs';
import Speakers from '../Home/Speakers';
import GoTop from '../Shared/GoTop';
import Footer from '../Common/Footer';
// import EventSchedules from '../Home/EventSchedules';
import FunFact from '../Common/FunFact';
import lax from 'lax.js';
import Partner from '../Common/Partner';
 
class Home extends React.Component {
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
                {/* Schedule Area */}
                {/* <EventSchedules /> */}
                {/* FunFacts Area */}
                <FunFact />
                {/* Pricing Area */}
                <Partner />
                {/* Speakers Area */}
                <Speakers />

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default Home;