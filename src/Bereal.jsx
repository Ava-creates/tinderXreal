import React from 'react'
import Webcam from 'webcam-easy';
import { useEffect, useState } from 'react';

export const Bereal = () => {
    const [canvasVisibility, setCanvasVisibility] = useState('visible');
    let canvaStyles = {
        visibility : canvasVisibility
    }

    const handleClick = () => {
        console.log("handling click")
    }
return (
<div>
<div id="camera-1">
<p>hello world</p>
<video id="webcam" crossOrigin="anonymous" autoPlay playsInline width="640" height="480" style={canvaStyles}></video>
<canvas id="canvas" className="d-none"></canvas>
<audio id="snapSound" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
<button onClick={StartCamera}>Take a picture</button>
<button onClick={() => setCanvasVisibility('hidden')}>Don't Take a picture</button>
</div>
<div id="camera-2">
<p>hello world</p>
<video id="webcam2" crossOrigin="anonymous" autoPlay playsInline width="640" height="480" style={canvaStyles}></video>
<canvas id="canvas2" className="d-none"></canvas>
<audio id="snapSound2" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
<button onClick={StartCamera}>Take a picture</button>
<button onClick={() => setCanvasVisibility('hidden')}>Don't Take a picture</button>
</div>
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

function StopCamera(){

    console.log("Stopping camera");

    //const webcam = InitializeCamera('webcam', 'canvas', 'snapSound', 'user');

    // use usestate here to set the visibilitty of the video and canvas to hidden

    // display the image in place

    // then instantiate another camera object and now this time create a small canvas
    // on the top left side

    // change the camera facing side this time.

    // join two images togerther

    // feed to the database
}

function StartCamera(){


    console.log("starting camera");

    const webcam = InitializeCamera('webcam', 'canvas', 'snapSound', 'user')

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
}


const frontcam = InitializeCamera('webcam2', 'canvas2', 'snapSound2', 'environment');
frontcam.start()
.then(result =>{
 console.log(result)
   console.log("webcam started");
})
.catch(err => {
    console.log(err);
});



}

export const Berealx = () => {

  return (
    <div>
    <video id="webcam" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
    <video id="webcam2" crossOrigin="anonymous" autoPlay playsInline width="640" height="480"></video>
    <canvas id="canvas" className="d-none"></canvas>
    <canvas id="canvas2" className="d-none"></canvas>
    <audio id="snapSound" crossOrigin="anonymous" src="audio/snap.wav" preload = "auto"></audio>
    <p>Hello World</p>
    <StartCamera></StartCamera>
    <button onClick={stopCamera}>Take a picture</button>
    </div>
  )
}

function StartCameraX(){
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

const camInfo = console.log(webcam.webcamCount);
const stopPic = webcam.snap();

const flipagain = webcam.flip()

}

function takePicture(){


//const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
const webcamElement = document.getElementById('webcam');
const webcamElement2 = document.getElementById('webcam2');
const canvasElement = document.getElementById('canvas');
const canvasElement2 = document.getElementById('canvas2');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'environment', canvasElement, snapSoundElement);
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
   const myTimeout = setTimeout(flipWebcam2, 5000);

   function flipWebcam2(){
    webcam2.facingMode = 'user';
    webcam.facingMode = 'user';
    console.log(webcam2)
    console.log(webcam)
    const flipWebcam2 = webcam2.flip();
}

}


