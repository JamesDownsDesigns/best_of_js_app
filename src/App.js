import React from 'react';
import { Animated } from 'react-animated-css';
import Hello from './components/Hello';
import DetectChrome from './components/DetectChrome';
import './styles/main.scss';
import GithubFetch from './components/FetchAPI';
<<<<<<< HEAD
=======

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js
import { Animated } from 'react-animated-css';
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be

const App = () => (
  <div>
    <DetectChrome>
<<<<<<< HEAD
      <div>
        <img src="https://assets.catawiki.nl/assets/2017/4/28/2/e/9/2e99de44-2c0a-11e7-9cf9-25f0a9c3fc8f.jpg" className="mainIcon"></img>
      </div>
      <GithubFetch />
=======
      <GithubFetch />
      <Hello greeting="Hello" isFullScreen />
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be
    </DetectChrome>
  </div>
);

export default App;
