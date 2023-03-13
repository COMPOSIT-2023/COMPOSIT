// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RegisterMetallomania() {

    const [registerMetallomaniaData, setRegisterMetallomaniaData] = useState({});

    const handleChange = (event) => {
        setRegisterMetallomaniaData({
            ...registerMetallomaniaData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerMetallomaniaData)

        // try {
        //     await axios.post("/auth/register",  registerMetallomaniaData )
        //     console.log(registerMetallomaniaData)
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
                        <h3>Register for Metallomania</h3>

                        <form>
                            <div className="form-group">
                                <label>Participant's Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Participant's Id"
                                    name="pid"
                                    onChange={handleChange}
                                />
                            </div>

                            
                            <Popup trigger=
                                {<button className="btn-modal btn-primary">Register</button>}>
                                <p>Thankyou for Registering!!</p>
                            </Popup>
                            <button type="reset" className="btn-modal btn-primary">Reset</button>
                            <p>Already registered for Metallomania? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}