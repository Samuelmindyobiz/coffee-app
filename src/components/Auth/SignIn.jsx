import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/signin', { email, password });

            alert('Sign In Successful');
        } catch (err) {
            setError(err.response?.data?.message || 'Sign In Failed');
        }
    };

    useEffect(() => {

        setError(null);
    }, [email, password]);

    return (
        <div className="flex justify-center items-center h-screen bg-primary">
            <form onSubmit={handleSubmit} className="bg-brandDark p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-4">Sign In</h2>
                <label className="block mb-4 text-white">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full rounded-md focus:outline-none text-black focus:border-secondary"
                    />
                </label>
                <label className="block mb-4 text-white">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full rounded-md focus:outline-none text-black focus:border-secondary"
                    />
                </label>
                <button type="submit" className="bg-secondary text-white p-2 w-full rounded-md hover:bg-primary transition">
                    Sign In
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default SignIn;
