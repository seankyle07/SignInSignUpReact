import React, { useState } from 'react';
import './Signup.css';
import { signup } from '../Service/ApiService';

export const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signup(formData);
            setMessage(response.Message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                setMessage(`Sign Up failed: ${error.response.data.Message}`);
            } else {
                setMessage(`Sign Up failed: ${error.message}`);
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Signup;
