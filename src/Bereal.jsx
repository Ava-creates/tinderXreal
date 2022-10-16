import React from 'react'
import Webcam from 'webcam-easy';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import MyTimer from './Timer';
import { Route, Navigate } from 'react-router-dom';
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

let userImages = []

function StartCamera(){
    

    console.log("starting camera");
    const webcam = InitializeCamera('webcam', 'canvas', 'snapSound', 'user');

    webcam.start()
   .then(result =>{
    console.log(result)
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });


   const pictureTime = setTimeout(clickPic, 2000);

   function clickPic(){
    const picture  = webcam.snap();
    console.log(picture);
    userImages.push(picture)
}

webcam.stop()

}



export const Bereal = () => {
    const [canvasVisibility, setCanvasVisibility] = useState('visible');
    let canvaStyles = {
        visibility : canvasVisibility
    }

    function callOfExpire(){
        console.log("Your time to bereal is over");
        console.log("Redirecting back to the messages page");
        // <Route path="/redirect" element={ <Navigate to="/error-page" /> } />
    }

    const handleClick = () => {
        console.log("handling click")
    }

    const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
return (
<div>
<div id="camera-1">
<p>hello world</p>
<MyTimer expiryTimestamp={time} onExpire={callOfExpire}/>
<video id="webcam" crossOrigin="anonymous" autoPlay playsInline width="640" height="480" style={canvaStyles}></video>
<canvas id="canvas" className="d-none"></canvas>
<audio id="snapSound" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
<button onClick={StartCamera}>Take a picture</button>
<button onClick={PostBeReal}>Post BeReal</button>
</div>
{/* <div id="camera-2">
<p>hello world</p>
<video id="webcam2" crossOrigin="anonymous" autoPlay playsInline width="640" height="480" style={canvaStyles}></video>
<canvas id="canvas2" className="d-none"></canvas>
<audio id="snapSound2" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
<button onClick={StartCamera}>Take a picture</button>
<button onClick={() => setCanvasVisibility('hidden')}>Don't Take a picture</button>
</div> */}
</div>
)

}


function InitializeCamera(videoFrameId, canvasId, audioID, cameraFacing){
    const webcamElement = document.getElementById(videoFrameId);
    const canvasElement = document.getElementById(canvasId);
    const snapSoundElement = document.getElementById(audioID);
    const webcam = new Webcam(webcamElement, cameraFacing, canvasElement, snapSoundElement);

    return webcam
}

function PostBeReal(){

    console.log("Switching up the Camera");

    const webcam = InitializeCamera('webcam', 'canvas', 'snapSound', 'environment');
    webcam.start()
    .then(result =>{
     console.log(result)
       console.log("webcam started");
    })
    .catch(err => {
        console.log(err);
    });
 
 
    const pictureTime = setTimeout(clickPic, 1000);
 
    function clickPic(){
     const environmentPicture  = webcam.snap();
     userImages.push(environmentPicture);
     console.log(environmentPicture);
     console.log(userImages)
    }

    const img = new Image()
    mergeImages(userImages, {
        Canvas: Canvas,
        Image: Image
      })
        .then(b64 => img.src=b64);
    // use usestate here to set the visibilitty of the video and canvas to hidden

    // display the image in place

    // then instantiate another camera object and now this time create a small canvas
    // on the top left side

    // change the camera facing side this time.

    // join two images togerther

    // feed to the database
}


// export const Berealx = () => {

//   return (
//     <div>
//     <video id="webcam" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
//     <video id="webcam2" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
//     <canvas id="canvas" className="d-none"></canvas>
//     <canvas id="canvas2" className="d-none"></canvas>
//     <audio id="snapSound" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
//     <p>Hello World</p>
//     <StartCamera></StartCamera>
//     <button onClick={stopCamera}>Take a picture</button>
//     </div>
//   )
// }

// function StartCameraX(){
//     console.log("starting camera");



// useEffect(() => {
//     takePicture();
//   });


// }

// function stopCamera(){
//     const webcamElement = document.getElementById('webcam');
//     const canvasElement = document.getElementById('canvas');
//     const snapSoundElement = document.getElementById('snapSound');
//     const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

//     console.log("Stopping Camera")
// //     webcam.snap()
// //    .then(result =>{
// //     console.log(result)
// //       console.log("webcam stopping");
// //    })
// //    .catch(err => {
// //        console.log(err);
// //    });

// const camInfo = console.log(webcam.webcamCount);
// const stopPic = webcam.snap();

// const flipagain = webcam.flip()

// }

// function takePicture(){


// //const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
// const webcamElement = document.getElementById('webcam');
// const webcamElement2 = document.getElementById('webcam2');
// const canvasElement = document.getElementById('canvas');
// const canvasElement2 = document.getElementById('canvas2');
// const snapSoundElement = document.getElementById('snapSound');
// const webcam = new Webcam(webcamElement, 'environment', canvasElement, snapSoundElement);
// const webcam2 = new Webcam(webcamElement2, 'environment', canvasElement2, snapSoundElement);
//     webcam.start()
//    .then(result =>{
//     console.log(result)
//       console.log("webcam started");
//    })
//    .catch(err => {
//        console.log(err);
//    });

//    webcam2.start()
//    .then(result =>{
//     console.log(result)
//       console.log("webcam2 started");
//    })
//    .catch(err => {
//        console.log(err);
//    });
//    const myTimeout = setTimeout(flipWebcam2, 5000);

//    function flipWebcam2(){
//     webcam2.facingMode = 'user';
//     webcam.facingMode = 'user';
//     console.log(webcam2)
//     console.log(webcam)
//     const flipWebcam2 = webcam2.flip();
// }

// }
