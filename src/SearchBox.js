import React, { useState, useEffect } from "react";
import { getSuggestions } from "./api/suggestionsAPI";
import SuggestionItem from "./SuggestionItem";
import { debounce } from "./utils";

export default function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSearchResults(value) {
    console.log(value);
    if (value && value !== "") {
      //call the suggestions api to set the auto complete list
      getSuggestions(value).then((suggestions) => {
        setSuggestions(suggestions);
      });
    } else {
      setSuggestions([]);
    }
  }

  const debouncedGetSearch = debounce((value) => getSearchResults(value), 1000);

  function onSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedGetSearch(value);
  }

  return (
    <>
      {/* <div>current search - {searchTerm}</div> */}
      <br />
      <div className="main-search-container">
        <input
          className="main-search-box"
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <ul className="suggestion-list">
        {suggestions.map((suggestion) => {
          return <SuggestionItem suggestion={suggestion} />;
        })}
      </ul>
    </>
  );
}
