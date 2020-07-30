import React from "react";
import makeApiCallSearch from '../actions/index';
// import { connect } from 'react-redux';

function Search() {
  function executeSearchQuery(event) {
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;
    makeApiCallSearch(searchQuery);
  }

  return (
    <React.Fragment>
      <form onSubmit = {executeSearchQuery}>
        <input
          type = 'text'
          name = 'searchQuery'
          placeholder = 'Player Search' />
        <button type = 'submit'>Search</button>
      </form>
    </React.Fragment>
  );
}

export default Search;