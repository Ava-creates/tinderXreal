
import React from 'react';

import a from "./tea.jpeg";

import './Card.css';
  
function Card ()
{
  return (

    <>
    <div id="card" alt="picture of the person">

        <img src={a} id='picture'></img>
        <div className='info'>
    <p> name, age  </p>   
    <p> location</p>

    {/* get from db */}
 </div>
 </div>
      
    </>
  )
}

export default Card ;

