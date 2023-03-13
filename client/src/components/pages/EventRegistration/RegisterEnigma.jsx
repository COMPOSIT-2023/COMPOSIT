// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RegisterEnigma() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
  

    
    
    // const participantId = window.location.pathname.split("/")[2];
    const participantId = userData._id
    const [registerEnigmaData, setRegisterEnigmaData] = useState({});
    const [displayMsg, setDisplayMsg] = useState(null);
    const handleChange = (event) => {
        setRegisterEnigmaData({
            ...registerEnigmaData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e, eventName) => {
        e.preventDefault()
        try {
            await axios.post(`/eventRegistration/${eventName}/${participantId}`, registerEnigmaData )
            setDisplayMsg(`Registered Successfully for ${eventName}`)
            // this.setState({ displayMsg: `Registered Successfully for ${eventName}` })
            alert(displayMsg,"bb")
            // window.location = '/events'
        }
        catch(error){
            setDisplayMsg(`${error.response.data} for ${eventName}`)
            // this.setState({ displayMsg: `${error.response.data} for ${eventName}` })
            alert(displayMsg, "jj")
        }
    }

    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Register for Enigma</h3>

                        <form>
                            <div className="form-group">
                                <label>Team Leader's Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid1"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <p class="marquee">
                                <span>Enter the Participant's id of other team member (if any)</span>
                            </p>
                            <br />
                            <div className="form-group">
                                <label>Member 2 Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid2"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary" onClick={(event) => handleSubmit(event, "enigma")}>Register</button>
                                
                                <p>Thankyou for Registering!!</p>
                            {/* <Popup trigger=

                                {<button type="submit" className="btn btn-secondary" onClick={(event) => handleSubmit(event, "enigma")}>Register</button>
                                }>
                                <p>Thankyou for Registering!!</p>
                            </Popup> */}
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Enigma? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}