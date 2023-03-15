import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
 
class FunFact extends React.Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render(){
        return (
            <section className="funfacts-area ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-focus"></i>
                                </div>
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 15000
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Total Footfall</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-microphone"></i>
                                </div>
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 10
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Total Events</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-copy"></i>
                                </div>
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 25000
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Social Media Reach</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-users-social"></i>
                                </div>
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 600
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Total Participants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FunFact;