import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/pages/About";
import Speakers from "./components/pages/Speakers";
import Schedule from "./components/pages/Schedule";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ComingSoon from "./components/pages/ComingSoon";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Sponsor from "./components/pages/Sponsor";

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
                <Route path="/speakers" exact component={Speakers} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/coming-soon" exact component={ComingSoon} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/sponsors" exact component={Sponsor} />
                <Route path="/error-404" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;