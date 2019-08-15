import React from 'react';

// child.js loops through the data it gets from FetchAPI.js
// It then renders a list item to the screen for every item it gets from FetchAPI.js

const child = props => (
  <div>
    <ul>
      {props.json.map(jsonItem => (
        <div>
          <h1>Search Result: {jsonItem.name}</h1>
          <ul>
            <li>Tags: {jsonItem.tags_url}</li>
            <li>Link to Repository: {jsonItem.html_url}</li>
            <li>Last Updated At: {jsonItem.updated_at}</li>
            <li>License: {jsonItem.license.name}</li>
            <li>Stars: {jsonItem.stargazers_count}</li>
            <li>Image: Have not figured it out yet lol :(</li>
          </ul>
          
        </div>
        
      ))}
    </ul>
  </div>
);

export default child;
