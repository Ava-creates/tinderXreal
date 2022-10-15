const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, doc, getDoc } = require('firebase-admin/firestore');

const express = require('express');
const app = express(); 
const port = process.env.PORT || 8011;
console.log(port)
// var firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID
// }

// Initialize Firebase
const serviceAccount = require('./tinderxreal-firebase-adminsdk-f02tr-95e223c0a5.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
// const userAPI = require('./middleware/user')
app.get('/read/:id', async (req, res) => {
  try {
    const userRef = db.collection("user").doc(req.params.id);
    const response = await userRef.get();
    res.send(response.data());
  } catch(error) {
    res.send(error);
  }
});

app.get('/', (req, res)=>{
  console.log("HGello World");
})

app.post('/create', async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.email;
    const userJson = {
      name: req.body.name,
      age: req.body.age
    };
    const usersDb = db.collection("user"); 
    const response = await usersDb.doc(id).set(userJson);
    res.send(response);
  } catch(error) {
    res.send(error);
  }
});

app.post('/update', async(req, res) => {
  try {
    const id=req.body.id;
    const body = req.body;
    const userRef = await db.collection("user").doc(id)
    .update({
      name: body.name,
      age: body.age
    });
    res.send(userRef);
  } catch(error) {
    res.send(error);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const response = await db.collection("users").doc(req.params.id).delete();
    res.send(response);
  } catch(error) {
    res.send(error);
  }
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});