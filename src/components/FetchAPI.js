import React from 'react';
import Child from './parentToChild/child';
import Loader from './parentToChild/loader';

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js

const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars&per_page=100';

class GithubFetch extends React.Component {
  constructor(props) {
    super(props); // Super basically gives props to React
    this.state = {
      githubSpec: undefined,
      hasGitHubData: false,
      searchFilter: '',
      urlSearchFilter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
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

  handleChange(event) {
    this.setState({ urlSearchFilter: event.target.value });
  }

  handleSortChange(event) {
    this.setState({ searchFilter: event.target.value });
    fetch(
      `https://api.github.com/search/repositories?q=javascript&sort=${
        event.target.value
      }&per_page=100`,
    )
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
      const { githubSpec, urlSearchFilter, searchFilter } = this.state;
      return (
        <div>
          <div className="searchBar">
            <label>Search: </label>
            <input type="text" value={urlSearchFilter} onChange={this.handleChange} />
            <input list="sortOptions" value={searchFilter} onChange={this.handleSortChange} />
            <datalist id="sortOptions">
              <option value="stars" />
              <option value="forks" />
              <option value="updated_at" />
            </datalist>
          </div>
          <div className="card">
            <Child
              json={githubSpec.items.filter(
                item => !item.name.toLowerCase().indexOf(this.state.urlSearchFilter.toLowerCase()),
              )}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default GithubFetch;
