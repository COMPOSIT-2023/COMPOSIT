import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Profile() {
    
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to='/' className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Profile Information</h3>
                        <form>
                        <ul className='profile-page'>
                            <li className='form-group form-control'><strong>Name:</strong> {userData.name}</li>
                            <li className='form-group form-control'><strong>Email:</strong> {userData.email}</li>
                            <li className='form-group form-control'><strong>Date of Birth:</strong> {userData.dob}</li>
                            <li className='form-group form-control'><strong>Institute ID / Roll No.:</strong> {userData.rollno}</li>
                            <li className='form-group form-control'><strong>Department:</strong> {userData.department}</li>
                            <li className='form-group form-control'><strong>Institution:</strong> {userData.institution}</li>
                            <li className='form-group form-control'><strong>Contact:</strong> {userData.contact}</li>
                            <li className='form-group form-control'><strong>Address:</strong> {userData.address}</li>
                            <li className='form-group form-control'><strong>Year of Graduation:</strong> {userData.gradyear}</li>
                            <li className='form-group form-control'><strong>Gender:</strong> {userData.gender}</li>
                            <li className='form-group form-control'><strong>Events Registered:</strong> Metaclix</li>
                            <Link to='/events' className="btn btn-primary">Go to our Events</Link>
                            {/* <Link to='/edit-profile' className="btn btn-primary">Edit Profile</Link> */}
                        </ul>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
