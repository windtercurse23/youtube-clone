import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment ">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label className="label">Video Search Product File </label>
          <input
            type="text"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
