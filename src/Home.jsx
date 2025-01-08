import React, { useEffect, useState } from "react";
import "./Home.css";
import gsap from "gsap";

const Login = () => {
  
  
  //States
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log('Email updated:', email);
  }, [email]); 
  //Hnadler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);
};
  useEffect(() => {
    // GSAP animation for the logo
    gsap.fromTo(
        ".logo",
        { opacity: 0, scale: 0.5, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "bounce.out" }
    );
}, []);

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="logo">TRUXGO</div>
            </div>
            <div className="login-right">
                <div className="login-form">
                    <h2>Log In to your account</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                        type="email" 
                        placeholder="Enter your email"
                        value={email} //Binding value into state
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                        <label>Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} // Bind input to state
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                        <a href="/forgot-password" className="forgot-password">
                            Forgot your password?
                        </a>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;


