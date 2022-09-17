import React from 'react'
import { useState } from 'react';

const SignIn = ({ userName, setUserName, userImage, setUserImage, isSignedIn, setIsSignedIn }) => {
    return (
        <div>
            <div id="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/1365/1365481.png"
                    height="75px"
                    width="75px"
                    alt="logo" />
            </div>

            <h3>Welcome, Please Sign In!</h3>

            <p>Username:</p>

            <input
                className="input"
                id="username"
                value={userName}
                placeholder="please type username"
                type="text"
                onChange={(event) => {
                    const newUserName = event.target.value;
                    setUserName(newUserName);
                }}
            ></input>

            <p>Profile Photo URL:</p>

            <input
                className="input"
                id="photo-url"
                value={userImage}
                placeholder="URL of image"
                type="text"
                onChange={(event) => {
                    const newImageUrl = event.target.value;
                    setUserImage(newImageUrl);
                }}
            ></input>
            <br />
            <button
                id="sign-in"
                type="submit"
                onClick={() => {
                    setIsSignedIn(true);
                    console.log("username: ", userName);
                    console.log("userimage: ", userImage);
                }}
            >Sign In</button>
        </div>
    )
}

export default SignIn
