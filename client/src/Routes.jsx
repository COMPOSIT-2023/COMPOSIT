import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/pages/About";
import OurTeam from "./components/pages/Ourteam";
import Schedule from "./components/pages/Schedule";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ComingSoon from "./components/pages/ComingSoon";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Sponsor from "./components/pages/Sponsor";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import EventCadPage from "./components/pages/EventDetails/EventCad";
import EventCasestudyPage from "./components/pages/EventDetails/EventCasestudy";
import EventMetallomaniaPage from "./components/pages/EventDetails/EventMetallomania";
import EventEnigmaPage from "./components/pages/EventDetails/EventEnigma";
import EventExcavatePage from "./components/pages/EventDetails/EventExcavate";
import EventIdeathonPage from "./components/pages/EventDetails/EventIdeathon";
import EventMetaclixPage from "./components/pages/EventDetails/EventMetaclix";
import EventSchoolquizPage from "./components/pages/EventDetails/EventSchoolquiz";
import EventTechnovaPage from "./components/pages/EventDetails/EventTechnova";
import EventTechtoonPage from "./components/pages/EventDetails/EventTechtoon";
import RegisterMetaclix from "./components/pages/EventRegistration/RegisterMetaclix";
import RegisterTechtoon from "./components/pages/EventRegistration/RegisterTechtoon";
import RegisterMetallomania from "./components/pages/EventRegistration/RegisterMetallomania";
import RegisterTechnova from "./components/pages/EventRegistration/RegisterTechnova";
import RegisterIdeathon from "./components/pages/EventRegistration/RegisterIdeathon";
import RegisterEnigma from "./components/pages/EventRegistration/RegisterEnigma";
import RegisterExcavate from "./components/pages/EventRegistration/RegisterExcavate";
import RegisterSchoolquiz from "./components/pages/EventRegistration/RegisterSchoolquiz";
import RegisterCad from "./components/pages/EventRegistration/RegisterCad";
import RegisterCasestudy from "./components/pages/EventRegistration/RegisterCasestudy";
import Popup from "./components/pages/MyPopup";
import PopupMsg from "./components/pages/Popup/PopupMsg"

// Conditionally render Navigation
const renderNavigation = () => {
    if (!(window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/coming-soon' || window.location.pathname === '/error-404')){
        return <Navigation />;
    }
}

const AppRouter = () => {
    return (
        <Router>
            {renderNavigation()}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/events" exact component={Events} />
                <Route path="/events/:id" exact component={Events} />
                <Route path="/event_cad" exact component={EventCadPage} />
                <Route path="/event_casestudy" exact component={EventCasestudyPage} />
                <Route path="/event_enigma" exact component={EventEnigmaPage} />
                <Route path="/event_excavate" exact component={EventExcavatePage} />
                <Route path="/event_ideathon" exact component={EventIdeathonPage} />
                <Route path="/event_metaclix" exact component={EventMetaclixPage} />
                <Route path="/event_metallomania" exact component={EventMetallomaniaPage} />
                <Route path="/event_schoolquiz" exact component={EventSchoolquizPage} />
                <Route path="/event_technova" exact component={EventTechnovaPage} />
                <Route path="/event_techtoon" exact component={EventTechtoonPage} />
                <Route path="/register_metaclix" exact component={RegisterMetaclix} />
                <Route path="/register_techtoon" exact component={RegisterTechtoon} />
                <Route path="/register_metallomania" exact component={RegisterMetallomania} />
                <Route path="/register_technova" exact component={RegisterTechnova} />
                <Route path="/register_ideathon" exact component={RegisterIdeathon} />
                <Route path="/register_enigma" exact component={RegisterEnigma} />
                <Route path="/register_excavate" exact component={RegisterExcavate} />
                <Route path="/register_schoolQuiz" exact component={RegisterSchoolquiz} />
                <Route path="/register_cad" exact component={RegisterCad} />
                <Route path="/register_caseStudy" exact component={RegisterCasestudy} />
                <Route path="/ourteam" exact component={OurTeam} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/coming-soon" exact component={ComingSoon} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/sponsors" exact component={Sponsor} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/edit-profile" exact component={EditProfile} />
                <Route path="/popup" exact component={Popup} />
                <Route path="/popupMsg" exact component={PopupMsg} />
                <Route path="/error-404" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;