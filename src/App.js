import React from 'react';
import Hello from './components/Hello';
import DetectChrome from './components/DetectChrome';
import './styles/main.scss';
// import GithubFetch from './components/FetchAPI';

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js
import { Animated } from 'react-animated-css';

const App = () => (
  <div>
    <div>
      <DetectChrome>
        <Hello greeting="Hello" isFullScreen />
      </DetectChrome>
    </div>
  </div>
);

export default App;
