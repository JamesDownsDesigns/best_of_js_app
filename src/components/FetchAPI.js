import React from 'react';
import Child from './parentToChild/child';
<<<<<<< HEAD
import Loader from './parentToChild/loader';
=======
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be

// GithubFetch is from FetchAPI, a child of App.js
// FetchAPI is a parent of child.js
// GithubFetch does three things:
// 1. Get data from Github via the Github API
// 2. Filter that data via the URL
// 3. Pass the data to child.js

<<<<<<< HEAD
const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars&per_page=100';
=======
let url = `https://api.github.com/search/repositories?q=javascript&sort=stars`;
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be

class GithubFetch extends React.Component {
  constructor(props) {
    super(props); // Super basically gives props to React
    this.state = {
      githubSpec: undefined,
      hasGitHubData: false,
<<<<<<< HEAD
      searchFilter: '',
      urlSearchFilter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
=======
      urlSearchFilter: '',
    };
    this.handleChange = this.handleChange.bind(this);
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be
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

<<<<<<< HEAD
  handleChange(event) {
    this.setState({ urlSearchFilter: event.target.value });
  }

  handleSortChange(event) {
    this.setState({ searchFilter: event.target.value });
    fetch('https://api.github.com/search/repositories?q=javascript&sort=' + event.target.value + '&per_page=100')
      .then(res => res.json())
      .then(githubSpec => {
        this.setState({
          githubSpec,
        });
      })
      .catch(console.error);
=======
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
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be
  }

  render() {
    if (this.state.githubSpec) {
<<<<<<< HEAD
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
=======
      const { githubSpec, urlSearchFilter } = this.state;
      return (
        <div>
          <div>
            <label>Search for Github Repos: </label>
            <input type="text" value={urlSearchFilter} onChange={this.handleChange}></input>
            <Child json={githubSpec.items} />
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be
          </div>
        </div>
      );
    }
<<<<<<< HEAD
    return (
      <div>
        <Loader />
      </div>
    );
=======
    return 'No Data Yet';
>>>>>>> 4b00160c22bc5c0f554bed8e971fa2823514b7be
  }
}

export default GithubFetch;
