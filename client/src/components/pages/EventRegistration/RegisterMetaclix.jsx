// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RegisterMetaclix() {

    const [registerMetaclixData, setRegisterMetaclixData] = useState({});

    const handleChange = (event) => {
        setRegisterMetaclixData({
            ...registerMetaclixData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerMetaclixData)

        // try {
        //     await axios.post("/auth/register",  registerTechnovaData )
        //     console.log(registerTechnovaData)
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
                        <h3>Register for Metaclix</h3>

                        <form>
                            <div className="form-group">
                                <label>Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid1"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            
                            <Popup trigger=
                                {<button className="btn-modal btn-primary">Register</button>}>
                                <p>Thankyou for Registering!!</p>
                            </Popup>
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Metaclix? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}