import React from 'react'
import Webcam from 'webcam-easy';
import { useEffect } from 'react';

export const Bereal = () => {

  return (
    <div>
    <video id="webcam" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
    <video id="webcam2" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
    <canvas id="canvas" className="d-none"></canvas>
    <audio id="snapSound" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
    <p>Hello World</p>
    <StartCamera></StartCamera>
    <button onClick={stopCamera}>Stop The Feed</button>
    </div>
  )
}

function StartCamera(){
    console.log("starting camera");


useEffect(() => {
    takePicture();
  });


}

function stopCamera(){
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    const snapSoundElement = document.getElementById('snapSound');
    const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

    console.log("Stopping Camera")
//     webcam.snap()
//    .then(result =>{
//     console.log(result)
//       console.log("webcam stopping");
//    })
//    .catch(err => {
//        console.log(err);
//    });

const stopPic = webcam.snap();

}

function takePicture(){


//const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
const webcamElement = document.getElementById('webcam');
const webcamElement2 = document.getElementById('webcam2');
const canvasElement = document.getElementById('canvas');
const canvasElement2 = document.getElementById('canvas2');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
const webcam2 = new Webcam(webcamElement2, 'environment', canvasElement2, snapSoundElement);
    webcam.start()
   .then(result =>{
    console.log(result)
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });

   webcam2.start()
   .then(result =>{
    console.log(result)
      console.log("webcam2 started");
   })
   .catch(err => {
       console.log(err);
   });


}
