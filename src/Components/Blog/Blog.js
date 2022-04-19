import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <h2 className='mt-5'>Question: What is the difference between authorization and authentication</h2>

      <p className='mt-4'>Answer: <br /> Authentication: <br />
        1. It verifies who the user is. <br />
        2. It works through passwords, one-time pins, biometric information, and other information provided or entered by the user. <br />
        3. It visible to and it also partially changeable by the user. <br />
        4. Authentication is the first step of a good identity. <br />
        5. Authentication also access the management process.</p>

      <p>Authorization: <br />
        1. It determines what resources a user can access. <br />
        2. Authorization works through settings that are implemented and maintained by the organization. <br />
        3. It takes place after authentication. <br />
        4. Authorization isn’t visible to or changeable by the user.</p>

      <h2 className='mt-5'>Question: Why are you using firebase? What other options do you have to implement authentication?</h2>

      <p className='mt-4'>Answer: <br />** Firebase Authentication provides backend services.Its also easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular sites like Google, Facebook and Twitter,github,apple store and more.</p>

      <p> ** Authentication by a server entails the use of a user name and password.There is also Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints also.</p>

      <h2 className='mt-5'>Question: What other services does firebase provide other than authentication?</h2>

      <p className='mt-4'>Answer: <br /> Here you will know about multiple Firebase competitors. Some are relatively new companies but still provide useful services to developers: <br />
        1. Parse - Open Source Backend Platform; <br />
        2. Back4app - Parse Hosting Platform; <br />
        3. Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise; <br />
        4.Backendless - Mobile Backend and API Services Platform; <br />
        5.Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects; <br />
        6.Pubnub - Real-time APIs and Global Messaging; <br />
        7.Kumulos - App Performance Management; <br />
        8.Game Sparks - Game Backend Platform; <br />
        9.Hoodie - Generic backend with a client API for Offline First applications; <br />
        10.Appwrite - Open-Source backend for Flutter developers <br />
        11.Deployd - Simple core library, with a modular API for your application; <br />
        12.NHost - Accelerates development and provides full control; <br />
        13.Amplify JS - Open-source Javascript framework; <br />
        14.Heroku - Platform as a service backed by Salesforce.</p>
    </div>
  );
};

export default Blog;