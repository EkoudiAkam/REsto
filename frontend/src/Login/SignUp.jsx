import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
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
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start custom-text-color fw-normal text-center">SignUp</h5>
                            <h1 className="text-white mb-4 text-center">Create an Account</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="username" placeholder="Your Username" name="username" value={formData.username} onChange={handleChange} />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Your Password" name="password" value={formData.password} onChange={handleChange} />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn custom-text-color w-100 py-3" type="submit">Sign Up</button>
                                    </div>
                                    <div className="field text-center text-danger">{message}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default SignUp;
