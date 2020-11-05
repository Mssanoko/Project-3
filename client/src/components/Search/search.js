import React from "react";

function Search(props) {
  const onChange = (event) => {
      const {name, value} = event.target;
      props.setSearchTerm
  }
  return (
    <section className="">
        <input
            className="search-input"
          onChange={(e) => props.setSearchTerm(e.target.value)}
          placeholder="enter a word/phrase/sentence you'd like to know in French"
          type="text"
          name="searchTerm"
        />
        <button data-testid="search-button"
          className="button"
          onClick={props.getTranslated}>
          Search
        </button>
    </section>
  );
}
export default Search;