// src/components/Auth.jsx
import React, { useState } from 'react';
import Input from './Input';
import reactLogo from '../assets/react.svg';
import { checkUser, checkAuth } from '../databases/user';
import { Alert } from './Alert';

const Auth = ({ onLogin }) => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const handleCheckEmail = () => {
        if (checkUser(inputEmail)) {
            setIsEmailVerified(true);
            setMessage('');
        } else {
            setMessage('Email not found');
        }
    };

    const handleLogin = () => {
        if (checkAuth(inputEmail, inputPassword)) {
            onLogin(inputEmail);
        } else {
            setMessage('Invalid Password');
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl items-center">
            <div className="card-body items-center">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h2 className="card-title">Login Page</h2>
                <p>Please login to continue</p>
                <div className="card-actions justify-end"></div>
                {message && Alert({ message })}
                <Input
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                    }
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="Input Your Email"
                    type="email"
                />
                {!isEmailVerified ? (
                    <button className="btn btn-primary mt-2" onClick={handleCheckEmail}>
                        Next
                    </button>
                ) : (
                    <>
                        <Input
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                                </svg>
                            }
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            placeholder="Input Your Password"
                            type="password"
                        />
                        <button className="btn btn-primary mt-2" onClick={handleLogin}>
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Auth;
