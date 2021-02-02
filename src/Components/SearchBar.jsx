import React from "react";

export default function SearchBar(props) {
  return (
    <input
      type="search"
      className="form-control"
      placeholder="Search for a movie"
      name="name"
      onChange={(event) => props.setQuery(event.target.value)}
      id="form1Example1"
    />
  );
}
