import React from "react";

export default function SearchBarWatch(props) {
  return (
    <input
      type="search"
      className="form-control"
      placeholder="Search for a movie"
      name="name"
      onChange={(event) => props.setWatch(event.target.value)}
      id="form1Example1"
    />
  );
}
