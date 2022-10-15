import React from "react";

import "./Login.css";

import {useNavigate} from "react-router-dom";


import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import Profile from "./Profile.js";

function Login() {

    const navigate = useNavigate();
    const navigateToProfile= () => {
    
        navigate("/Profile", {replace: true});
      };

    return(


        <div className="wrapper">
            <h1>tinderXreal</h1>
        <div className="wrapper2">
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <button type="button" onClick={navigateToProfile}>Submit</button>
        </form>
        <div>
        <Routes>
          <Route path="/Profile/*" element={<Profile />} />
          
        </Routes>

         
       
        
        </div>
      
      </div>
      </div>
    )
  }

export default Login;