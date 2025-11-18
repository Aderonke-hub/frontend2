import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (e) => {
        let userData = {
            firstName,
            lastName,
            email,
            Password,
        };
        e.preventDefault();
        console.log(userData);
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Create Account</h2>
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            id="current-password"
                            placeholder="Enter your password"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="signup-button"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                    <p className="signin-link">
                        Already have an account? <Link to="/signin">Sign in here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
