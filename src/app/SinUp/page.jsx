'use client'
import React, { useState } from 'react'
import useUserStore from '../store'
// import Homedashboard from './componets/homedashboard/page';
import Link from 'next/link';
export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const setUser = useUserStore((state) => state.setUser);

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@(gmail|yahoo)\.com$/;
        if (!emailRegex.test(value)) {
            setEmailError('ایمیل باید شامل @gmail.com یا @yahoo.com باشد');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handleSubmit = async () => {
        const newUser = { name, email, password };
        try {
            const response = await fetch('https://670ba62a7e5a228ec1ce29c2.mockapi.io/user');
            const users = await response.json();
            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                alert('You are already signed in with this email. Please sign in instead.');
            } else {
                const createResponse = await fetch('https://670ba62a7e5a228ec1ce29c2.mockapi.io/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });

                if (createResponse.ok) {
                    const data = await createResponse.json();
                    console.log('Data successfully submitted:', data);
                    setUser({ name: data.name, email: data.email });
                    alert('Form submitted successfully!');
                    window.location.href = '/componets/homedashboard';
                } else {
                    console.error('Error submitting form:', createResponse.statusText);
                    alert('Failed to submit form');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    };
    return (
        <div className="font-[sans-serif] bg-white md:h-screen">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                <div className="max-md:order-1 p-4">
                    <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full object-contain block mx-auto" alt="login-image" />
                </div>

                <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
                    <form className="max-w-lg w-full mx-auto">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-yellow-400">Create an account</h3>
                        </div>

                        <div>
                            <label className="text-white text-xs block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input 
                                    name="name" 
                                    type="text" 
                                    required 
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" 
                                    placeholder="Enter name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="text-white text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input 
                                    name="email" 
                                    type="text" 
                                    required 
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" 
                                    placeholder="Enter email" 
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>

                        <div className="mt-8">
                            <label className="text-white text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input 
                                    name="password" 
                                    type="password" 
                                    required 
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" 
                                    placeholder="Enter password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-12">
                            <button 
                                type="button" 
                                onClick={handleSubmit} 
                                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                            >
                                Create Account
                            </button>
                            <p className="text-sm text-white mt-8">
                                Already have an account? <Link href="/" className="text-yellow-400 font-semibold hover:underline ml-1">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}