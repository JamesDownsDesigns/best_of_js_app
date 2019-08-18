import React from 'react';

// child.js loops through the data it gets from FetchAPI.js
// It then renders a list item to the screen for every item it gets from FetchAPI.js

const child = props => (
  <div className="container">
    {props.json.slice(0, 3).map(jsonItem => (
      <div className="cardFrame">
        <header>
          <img src={jsonItem.owner.avatar_url} width={120}  />
          <h1>
            <a href={jsonItem.owner.html_url}>{jsonItem.name}</a>
          </h1>
          <h4>{jsonItem.updated_at}</h4>
          <h6>{jsonItem.license.name}</h6>
          <h3>Star Count:{jsonItem.stargazers_count}</h3>
        </header>
      </div>
    ))}
  </div>
);

export default child;
