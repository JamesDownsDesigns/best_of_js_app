import React from 'react';

// child.js loops through the data it gets from FetchAPI.js
// It then renders a list item to the screen for every item it gets from FetchAPI.js

const child = props => (
  <div>
    <ul>
      {props.json.map(jsonItem => (
        <li>{jsonItem.name}</li>
      ))}
    </ul>
  </div>
);

export default child;
