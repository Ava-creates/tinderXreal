import React, { useEffect } from 'react';
import './App.css';

import { ReactDOM } from 'react';
import TinderCard from 'react-tinder-card';
import Card from "./Card.js";
import {useRef} from 'react';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Link
} from "react-router-dom";

import Matchroom from "./Matchroom.js";


function App() {
  const match = true;
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  const [lastDirection, setLastDirection] = useState();

  const onSwiped = (direction) => {
    console.log('removing: ')
    setLastDirection(direction)

    console.log(lastDirection);
    
  }

var k=1

const onCardLeftScreen = (myIdentifier) => {

  console.log("left the screen");
 
}


  useEffect  (() =>{

    console.log("dsfds");

    const l= t.current;
   if (lastDirection==="down")
   {
  
     l.style.visibility = "visible";
     console.log(l)
    
   }
   else
   {
     console.log("fuck");
   }
  }, []);


  const t = React.createRef()


  

  return (
    <div className="App">
  
        <h1>tinderXreal</h1>
        <div className="match" ref={t} id="mat">matched wohoo</div>
          <TinderCard onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen('fooBar')} id="first"> 
          <Card></Card>
          </TinderCard>
          
    </div>
  );
}

export default App;
