import React from 'react';
import Child from './parentToChild/child';

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js

let url = `https://api.github.com/search/repositories?q=javascript&sort=stars`;

class GithubFetch extends React.Component {
  constructor(props) {
    super(props); // Super basically gives props to React
    this.state = {
      githubSpec: undefined,
      hasGitHubData: false,
      urlSearchFilter: '',
    };
    this.handleChange = this.handleChange.bind(this);
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

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  handleChange(event) {
    let searchFilter = event.target.value;
    this.setState({ urlSearchFilter: searchFilter });
    /*if (searchFilter) {
      fetch(`https://api.github.com/search/repositories?q=javascript+-${searchFilter}&sort=stars`)
        .then(res => res.json())
        .then(githubSpec => {
          this.setState({
            githubSpec,
          });
        })
        .catch(console.error);
    } else {
      fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')
        .then(res => res.json())
        .then(githubSpec => {
          this.setState({
            githubSpec,
          });
        })
        .catch(console.error);
    }*/
  }

  render() {
    if (this.state.githubSpec) {
      const { githubSpec, urlSearchFilter } = this.state;
      return (
        <div>
          <div>
            <label>Search for Github Repos: </label>
            <input type="text" value={urlSearchFilter} onChange={this.handleChange}></input>
            <Child json={githubSpec.items} />
          </div>
        </div>
      );
    }
    return 'No Data Yet';
  }
}

export default GithubFetch;
