import React from 'react';
import Child from './parentToChild/child';

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js

const searchFilter = 'f';
const url = `https://api.github.com/search/repositories?q=javascript+-${searchFilter}&sort=stars`;

class GithubFetch extends React.Component {
  constructor(props) {
    super(props); // Super basically gives props to React
    this.state = {
      githubSpec: undefined,
      hasGitHubData: false,
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(githubSpec => {
        this.setState({
          githubSpec,
        });
      })
      .catch(console.error);
  }

  render() {
    if (this.state.githubSpec) {
      const { githubSpec } = this.state;
      return (
        <div>
          <div>
            <Child json={githubSpec.items} />
          </div>
        </div>
      );
    }
    return 'No Data Yet';
  }
}

export default GithubFetch;
