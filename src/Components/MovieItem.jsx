import React from "react";

export default function MovieItem(props) {
  return (
    <li class="list-group-item">
      {props.movie.name}
      <button></button>
      <button></button>
    </li>
  );
}
