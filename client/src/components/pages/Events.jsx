import React from 'react';
import MainBanner from '../Events/MainBanner';
import PricingOne from '../Events/PricingOne';
import lax from 'lax.js';
import GoTop from '../Shared/GoTop';
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
                <PricingOne/>
                
                {/* Why Choose Us Area */}
                {/*<WhyUs />*/}
                {/* Why Choose Us Area */}
                {/*<WhyUs />*/}
                

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default EventPage;


// import React from 'react';
// import MainBanner from '../About/MainBanner';
// import About from '../About/About';
// import WhyUs from '../Common/WhyUs';
// import Speakers from '../About/Speakers';
// import GoTop from '../Shared/GoTop';
// import Footer from '../Common/Footer';
// import FunFact from '../Common/FunFact';
// import lax from 'lax.js';
// import Partner from '../Common/Partner';
// import Subscribe from '../Common/Subscribe';
// import Cta from '../Common/Cta';
 
// class AboutPage extends React.Component {
//     constructor(props) {
//         super(props)
//         lax.setup()
    
//         document.addEventListener('scroll', function(x) {
//             lax.update(window.scrollY)
//         }, false)
    
//         lax.update(window.scrollY)
//     }
//     render(){
//         return (
//             <React.Fragment>
//                 {/* Main Banner */}
//                 <MainBanner />
//                 {/* About Area */}
//                 <About />
//                 {/* Why Choose Us Area */}
//                 <WhyUs />
//                 {/* Speakers Area */}
//                 <Speakers />
//                 {/* CTA Are */}
//                 <Cta />
//                 {/* FunFacts Area */}
//                 <FunFact />
//                 {/* Pricing Area */}
//                 <Partner />
//                 {/* Buy Tickets Area */}
//                 <Subscribe />

//                 <Footer />

//                 {/* Back Top top */}
//                 <GoTop scrollStepInPx="50" delayInMs="16.66" />
//             </React.Fragment>
//         );
//     }
// }
 
// export default AboutPage;