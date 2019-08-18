import React from 'react';

const searchStyles = {
  color: 'red',
};

const Search = props => (
  <div style={searchStyles}>
    <input
      id="searchBar"
      type="text"
      value={props.searchTerm}
      onChange={event => props.setSearchTerm(event.target.value)}
      placeholder="Search or jump to..."
    />
    <select
      id="filter"
      value={props.filter}
      onChange={event => props.setFilter(event.target.value)}
    >
      {props.filterOptions.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  </div>
);
// const App = () => {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [filter, setFilter] = React.useState('');
//   const [filterOptions, setFilterOptions] = React.useState([
//     'Alphabetical',
//     'Most Starred',
//     'Most Forked',
//   ]);

//   return (
//     <div>
//         {searchTerm}
//         {filter}
//       <Search
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         filter={filter}
//         setFilter={setFilter}
//         filterOptions={filterOptions}
//         setFilterOptions={setFilterOptions}
//      />
//       </div>
// );
// );
// };;

export default Search;
