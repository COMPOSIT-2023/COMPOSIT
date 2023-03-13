// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RegisterIdeathon() {

    const [registerIdeathonData, setRegisterIdeathonData] = useState({});

    const handleChange = (event) => {
        setRegisterIdeathonData({
            ...registerIdeathonData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerIdeathonData)

        // try {
        //     await axios.post("/auth/register",  registerIdeathonData )
        //     console.log(registerIdeathonData)
        //     window.location = '/login'
        // }
        // catch(error){
        //     console.log(error)
        // }
            
    }

    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Register for Ideathon</h3>

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
                            <div className="form-group">
                                <label>Member 3 Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid3"
                                    onChange={handleChange}
                                />
                            </div>

                            
                            <Popup trigger=
                                {<button className="btn-modal btn-primary">Register</button>}>
                                <p>Thankyou for Registering!!</p>
                            </Popup>
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Ideathon? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}