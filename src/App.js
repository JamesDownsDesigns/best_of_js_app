import React from 'react';
import { Animated } from 'react-animated-css';
import Hello from './components/Hello';
import DetectChrome from './components/DetectChrome';
import './styles/main.scss';
import GithubFetch from './components/FetchAPI';

const App = () => (
  <div>
    <DetectChrome>
      <div>
        <img src="https://assets.catawiki.nl/assets/2017/4/28/2/e/9/2e99de44-2c0a-11e7-9cf9-25f0a9c3fc8f.jpg" className="mainIcon"></img>
      </div>
      <GithubFetch />
    </DetectChrome>
  </div>
);

export default App;
