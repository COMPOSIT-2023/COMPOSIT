import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

class PricingOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMsg: null,
        };
    }
    render() {
        const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
        const participantId = window.location.pathname.split("/")[2];

        // const postId = location.pathname.split("/")[2]
        // const [registerData, setRegisterData] = useState({});

        // const handleChange = (event) => {
        //     setRegisterData({
        //         ...signupData,
        //         [event.target.name]: event.target.value,
        //     })
        // }
        const onClickHandler = async (e, source) => {
            e.preventDefault()

            try {
                console.log(source)
                await axios.post(`/eventRegistration/${source}/${participantId}`, participantId)
                this.setState({ displayMsg: `Registered Successfully for ${source}` })
                alert(this.state.displayMsg)
                window.location = '/events'
            }
            catch (error) {
                this.setState({ displayMsg: `${error.response.data} for ${source}` })
                alert(this.state.displayMsg)
            }
        };
        return (
            <section className="pricing-area ptb-120 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Technova</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your research acumen and get a glimpse of presenting scientific work in a conference-like environment!</p>
                                </ul>
                                <Link to="/event_ideathon" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_technova" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Ideathon</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Pitch your next amazing business idea and get valuable feedback!</p>
                                </ul>
                                <Link to="/event_ideathon" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_ideathon" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Enigma</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your knowledge in general as well as core topics. So Quizzers, get ready for Buzzers!</p>
                                </ul>
                                <Link to="/event_enigma" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_enigma" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">School Quiz</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>An intriguing quiz event for school students to test their knowledge from various topics ranging from Science to Language. Get ready to think!</p>
                                </ul>
                                <Link to="/event_schoolQuiz" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_schoolQuiz" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Excavate</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Get ready to put your analytical skills to the test in the ultimate data analytics competition!</p>
                                </ul>
                                <Link to="/event_excavate" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_excavate" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Techtoon</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Let your imagination run wild as you create hilarious and witty memes/ artwork that leave everyone in stitches.</p>
                                </ul>
                                <Link to="/event_techtoon" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_techtoon" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Metaclix</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Enter our online photography contest and capture everyday materials, industrial applications, or the universe beyond!</p>
                                </ul>
                                <Link to="/event_metaclix" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_metaclix" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">CAD</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>CAD paragraph</p>
                                </ul>
                                <Link to="/event_cad" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_cad" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Case Study</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Challenge your critical thinking ability and grab this opportunity to do in depth research about a problem statement!</p>
                                </ul>
                                <Link to="/event_casestudy" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_caseStudy" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Metallomania</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Metallomania paragraph</p>
                                </ul>
                                <Link to="/event_metallomania" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_metallomania" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingOne;