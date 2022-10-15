import React, { useEffect } from 'react';
import './App.css';

import { ReactDOM } from 'react';
import TinderCard from 'react-tinder-card';
import Card from "./Card.js";
import {useRef} from 'react';
import { useState } from 'react';
import { Redirect } from "react-router-dom";

import {useNavigate} from "react-router-dom";




import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Matchroom from "./Matchroom.js";

import Login from "./Login.js";

import Signup from "./Signup.js";


function App() {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    
    navigate("/Login", {replace: true});
  };

  const navigateToSignup = () => {
    
    navigate('/Signup', {replace:true});
  };


  return (
    <div className="App">

       
  
        <h1>tinderXreal</h1>

        <div className="home">
          <button onClick={navigateToLogin} > Login</button>
          <button onClick={navigateToSignup} > Sign up </button>

        <Routes>
          <Route path="/Login/*" element={<Login />} />
          <Route path="/Signup/*" element={<Signup />} />
        </Routes>
        </div>

    </div>
  );
}

export default App;
