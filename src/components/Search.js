import React from "react";

function Search({ searchText, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => onSearch(e)} value={searchText} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
