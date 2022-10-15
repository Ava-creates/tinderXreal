import React, { useState, useEffect } from 'react'
import styles from "./styles.css"

const firebase = require('firebase');


const Pictures = (props) => {

    const [uploadImage, setUploadImage] = useState(null)
    const [progressValue, setProgressValue] = useState(0)

    let storageRef = firebase.storage().ref()
    let { pictureURLs } = props


    const handleUpload = () => {
        setProgressValue(0)

        const uploadTask = storageRef.child(`cabinPictures/${uploadImage.name}`).put(uploadImage)
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes ) * 100)
            setProgressValue(progress)
        }, 
        (error) => {
            //error function
            console.log(error)
        },
        () => {
            //complete function
            storageRef.child('cabinPictures').child(uploadImage.name).getDownloadURL().then(url => {
                console.log(url)
            } )
        });
    }

    const handleFileSelect = (e) => {
        if (e.target.files[0]) {
            setUploadImage(e.target.files[0])
        }
    }

    return (
        <div className="pictures-container">
            <h2>Upload a Picture!</h2>
            <button className="upload-button" onClick={() => handleUpload()}>Upload</button>
            <input type="file" onChange={(e) => handleFileSelect(e)}></input>
            <progress value={progressValue} max="100"></progress>
            <div className="pictures"> 
                {
                    pictureURLs.map((url, index) => {
                        return <img className="picture" key={index} src={url}></img>

                    })
                }
            </div>
        </div>
    )
}

export default Picture