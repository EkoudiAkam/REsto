import React, { useState } from 'react';
import axios from 'axios';

function SignIn({ handleSignIn }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSignIn(formData); 
    };

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <h1 className="custom-text-color m-0"><i className="fa fa-utensils me-3"></i>RESTo</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="SignIn">SignIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="SignUp">SignUp</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0 justify-content-center">
            <div className="col-md-8 bg-dark d-flex align-items-center">
                <div className="p-5 wow fadeInUp mx-auto text-center" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start custom-text-color fw-normal">SignIn</h5>
                <h1 className="text-white mb-4">Sign In to Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                    <div className="col-12">
                        <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Your Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn custom-text-color w-100 py-3" type="submit">Sign In</button>
                    </div>
                    <div className="col-12">
                        <p className="text-muted">Don't have an account? <a className="custom-text-color" href="SignUp">Sign Up</a></p>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>

        </div>
);
}

export default SignIn;
