import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function EditProfile() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [dob, setDob] = useState(userData.dob);
    const [rollno, setRollno] = useState(userData.rollno);
    const [department, setDepartment] = useState(userData.department);
    const [institution, setInstitution] = useState(userData.institution);
    const [contact, setContact] = useState(userData.contact);
    const [address, setAddress] = useState(userData.address);
    const [gradyear, setGradyear] = useState(userData.gradyear);
    const [gender, setGender] = useState(userData.gender);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    }
    
    return (
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <h3>Edit Profile Information</h3>
    
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>
                                    Name:
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Email:
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Date of Birth:
                                </label>
                                <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Institute ID / Roll No.:
                                </label>
                                <input type="text" className="form-control" value={rollno} onChange={(e) => setRollno(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Department:
                                </label>
                                <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Institution:
                                </label>
                                <input type="text" className="form-control" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Contact:
                                </label>
                                <input type="text" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Address:
                                </label>
                                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Year of Graduation:
                                </label>
                                <input type="text" className="form-control" value={gradyear} onChange={(e) => setGradyear(e.target.value)} />
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Gender:
                                </label>
                                <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} />
                                
                            </div>
                            <Link to='/profile' type="submit" className='btn btn-primary'>Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}



                        
    