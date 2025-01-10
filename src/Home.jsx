import React, { useEffect, useState } from "react";
import "./Home.css";
import gsap from "gsap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormPage from "./FormPage";

const Login = () => {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [response, setResponse] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Email updated:', username);
  }, [username]);

  useEffect(() => {
    // GSAP animation for the logo
    gsap.fromTo(
      ".logo",
      { opacity: 0, scale: 0.5, y: -50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "bounce.out" }
    );
  }, []);

  // useEffect(() => {
  //   // Redirect to form page if logged in
  //   if (isLoggedIn) {
  //     navigate("/formpage");
  //   }
  // }, [isLoggedIn, navigate, response]); // Watch isLoggedIn state for changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops form from refreshing the page

    try {
      const options = {
        method: "get",
        url: "http://bidwheels-api-env.eba-ts5rcstj.us-east-1.elasticbeanstalk.com/login",
        params: { username, password },
        headers: {
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "Fetch Client",
          "Accept-Encoding": "gzip, deflate",
          Connection: "keep-alive",
        },
      };

      const response = await axios.request(options);

      // setResponse(response.data); // Store response
      // console.log(response.data);
      // setIsLoggedIn(true); // Set login status  
      navigate("/formpage", { state: { response: response.data } });

    } catch (error) {
      console.log("--->", error);
      setError("Username or password is incorrect.");
    }
  };

  return (
    <>
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
                value={username} // Binding value into state
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password} // Bind input to state
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="/forgot-password" className="forgot-password">
                Forgot your password?
              </a>
              {error && (
                <div style={{ color: "red" }}>
                  <p>{error}</p>
                </div>
              )}
              <button type="submit">Log In</button>
            </form>
          </div>
         
        </div>
      </div>
      {/* {isLoggedIn && <FormPage response={response} />} */}
      
    </>
  );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     gsap.fromTo(
//       ".logo",
//       { opacity: 0, scale: 0.5, y: -50 },
//       { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "bounce.out" }
//     );
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const options = {
//         method: "get",
//         url: "http://bidwheels-api-env.eba-ts5rcstj.us-east-1.elasticbeanstalk.com/login",
//         params: { username, password },
//         headers: {
//           "Cache-Control": "no-cache",
//           Accept: "*/*",
//           "User-Agent": "Fetch Client",
//           "Accept-Encoding": "gzip, deflate",
//           Connection: "keep-alive",
//         },
//       };

//       const response = await axios.request(options);
//       console.log("Response Data:", response.data);

//       // Navigate to FormPage and pass the response as state
//       navigate("/formpage", { state: { response: response.data } });
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Username or password is incorrect.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <div className="logo">TRUXGO</div>
//       </div>
//       <div className="login-right">
//         <form onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <button type="submit">Log In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

