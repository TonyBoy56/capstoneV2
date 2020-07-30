import React from "react";
import makeApiCallSearch from '../actions/index';
// import { connect } from 'react-redux';

function Search() {
  function executeSearchQuery(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const platform = event.target.platform.value;
    makeApiCallSearch(userName, platform);
  }

  return (
    <React.Fragment>
      <form onSubmit = {executeSearchQuery}>
        <input
          type = 'text'
          name = 'userName'
          placeholder = 'Player Search' />
        <input
          type = 'text'
          name = 'platform'
          placeholder = 'Platform Search' />
        <button type = 'submit'>Search</button>
      </form>
    </React.Fragment>
  );
}

export default Search;