import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/signup', { email, password });
            alert('Sign Up Successful');
        } catch (err) {
            setError(err.response?.data?.message || 'Sign Up Failed');
        }
    };

    useEffect(() => {

        setError(null);
    }, [email, password]);

    return (
        <div className="flex justify-center items-center h-screen bg-brandDark">
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-primary mb-4">Sign Up</h2>
                <label className="block mb-4 text-white">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full rounded-md focus:outline-none focus:border-primary text-black"
                    />
                </label>
                <label className="block mb-4 text-white">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full rounded-md focus:outline-none focus:border-primary text-black"
                    />
                </label>
                <button type="submit" className="bg-primary text-white p-2 w-full rounded-md hover:bg-brown transition">
                    Sign Up
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
