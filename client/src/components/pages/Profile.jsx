import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
 
class Profile extends React.Component {

    render(){
        return (
            <section className="login-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            
                            <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                            <h3>Your Profile</h3>
                            

                            {/* <form onSubmit={this.onSubmit}> */}
                                <div className="form-group">
                                    <p>Name: {this.props.user.name}</p>
                                </div>

                                <div className="form-group">
                                    <p>Email: {this.props.user.email}</p>
                                </div>

                                <div className="form-group">
                                    <p>Date of Birth: {this.props.user.dob}</p>
                                </div>

                                <div className="form-group">
                                    <p>Institute ID: {this.props.user.rollno}</p>
                                </div>

                                <div className="form-group">
                                    <p>Department: {this.props.user.department}</p>
                                </div>

                                <div className="form-group">
                                    <p>Institution: {this.props.user.institution}</p>
                                </div>

                                <div className="form-group">
                                    <p>Contact: {this.props.user.phone}</p>
                                </div>

                                <div className="form-group">
                                    <p>Address: {this.props.user.address}</p>
                                </div>

                                <div className="form-group">
                                    <p>Year of Graduation: {this.props.user.gradyear}</p>
                                </div>

                                <div className="form-group">
                                    <p>Gender: {this.props.user.gender}</p>
                                </div>

                                {/* <button type="submit" className="btn-modal btn-primary" onClick={this.handleClick}>Login</button>
                                {this.state.errorr && <p>{this.state.errorr}</p>}
                                <p>
                                    <Link to="/signup" className="pull-left">Create a new account</Link>
                                    
                                    <Link to="#" className="pull-right">Forgot your password?</Link>
                                </p> */}
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Profile;