import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// require("dotenv").config();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const PORT = process.env.PORT || 8080;

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

// // create constants for the application.
// const constants = {
//   matchRequestStatus: {
//     pending: 0,
//     accepted: 1,
//     rejected: -1,
//   },
// };

// // config multers.
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/img");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Date.now()}.jpg`);
//   },
// });

// const upload = multer({ storage: storage });

// create datbase connection