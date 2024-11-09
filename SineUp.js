import React, { useState } from 'react';
import './SignUp.css'; // Updated import to match your CSS class

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(''); // Reset error on new submission
        setSuccess(''); // Reset success message on new submission

        try {
            const response = await fetch('http://localhost:3000/api/signup', {  // Keep the backend URL as port 3000
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess('Sign Up successful!');
                setFormData({ name: '', email: '', password: '' }); // Clear form fields after successful sign up
            } else {
                const data = await response.json();
                setError(data.message || 'Error: Unable to sign up');
            }
        } catch (error) {
            setError('Error: ' + error.message);
        }
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
