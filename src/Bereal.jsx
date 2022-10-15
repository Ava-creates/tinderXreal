import React from 'react'
import Webcam from 'webcam-easy';
import { useEffect } from 'react';

export const Bereal = () => {
  return (
    <div>
    <video id="webcam" autoPlay playsInline width="640" height="480"></video>
    <canvas id="canvas" className="d-none"></canvas>
    <audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio>
    <p>Hello World</p>
    <StartCamera></StartCamera>
    </div>
  )
}

function StartCamera(){
    console.log("starting camera");


useEffect(() => {
    takePicture();
  });


}

function takePicture(){

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
    webcam.start()
   .then(result =>{
    console.log(result)
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });

}
