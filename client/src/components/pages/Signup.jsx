// import React from 'react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Signup() {

    const [signupData, setSignupData] = useState({});

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(signupData)

        try {
            await axios.post("/auth/register",  signupData )
            console.log(signupData)
            window.location = '/login'
        }
        catch(error){
            console.log(error)
        }
            
    }

    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Create your Account</h3>

                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name='password'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">

                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="dd/mm/yyyy"
                                    name="dob"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Institute ID / Roll No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Institute ID"
                                    name="rollno"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Department"
                                    name="department"

                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Institution</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Institution"
                                    name="institution"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">

                                <label>Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="contact"
                                    placeholder="Contact Number"
                                    maxlength="10"  max="9999999999" min="0" step="1" pattern="[0-9]{10}"


                                    onChange={handleChange}
                                />
                            </div>


                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Year of Graduation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Year of Graduation"
                                    name="gradyear"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Gender</label>
                                <select
                                    name="gender"
                                    className="form-control"
                                    type='text'
                                    onChange={handleChange}
                                >
                                    <option value="default">Please Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Others</option>
                                </select>
                            </div>

                            <button type="submit" className="btn-modal btn-primary" onClick={handleSubmit}>Signup</button>
                            <p>Already a registered user? <Link to="/login">Login!</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}