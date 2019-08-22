import React from 'react';
import PropTypes from 'prop-types';

const searchStyles = {
  color: 'red',
};

const Search = props => {
  const {
    searchTerm, setSearchTerm, setFilter, filter, filterOptions
  } = props;
  return (
    <div style={searchStyles}>
      <input
        id="searchBar"
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search or jump to..."
      />
      <select id="filter" value={filter} onChange={event => setFilter(event.target.value)}>
        {filterOptions.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterOptions: PropTypes.array.isRequired,
};

Search.defaultProps = {
  searchTerm: '',
  setSearchTerm: console.log,
  filter: '',
  setFilter: console.log,
  filterOptions: []
};


export default Search;

const filter = [{ value: 'a-z', display: 'Alphabetically' }];
// <option value={option.value}>{option.display}</option>

