import React from 'react';
import { Animated } from 'react-animated-css';
import Hello from './components/Hello';
import DetectChrome from './components/DetectChrome';
import './styles/main.scss';
import Search from './components/search';
// import GithubFetch from './components/FetchAPI';

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [filter, setFilter]

  return < div >
    <h2>Hello</h2>
    {<div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>}
  </div>;
};

export default App;
