import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email ID" id="email" name="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">LOG IN</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('user_register')}>Don't have an account? Register here.</button>
        </div>
    )
}