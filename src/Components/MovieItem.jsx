import { useDispatch } from "react-redux";
import { watchedMovie, deleteMovie } from "../store/actions";
import { useState } from "react";

export default function MovieItem({ movie }) {
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const showimg = () => {
    // <img src={movie.image} alt={movie.image} style={{ width: "95px" }}></img>;
    setStatus(!status);
  };

  return (
    <li class="list-group-item" style={{ paddingBottom: " 20px" }}>
      <h2
        className="lead"
        style={{ fontWeight: "bold", padding: "10px 0 10px" }}
        onClick={showimg}
      >
        {movie.name}
      </h2>
      {status && (
        <img
          src={movie.image}
          alt={movie.image}
          style={{ width: "95px" }}
        ></img>
      )}
      <button
        type="button"
        class="btn btn-outline-success mx-2 btn-sm"
        data-mdb-ripple-color="dark"
        style={{ float: "right" }}
        onClick={() =>
          dispatch(watchedMovie({ ...movie, watched: !movie.watched }))
        }
      >
        {movie.watched ? "Watched" : "Unwatched"}
      </button>
      <button
        type="button"
        class="btn btn-outline-danger mx-2 btn-sm"
        data-mdb-ripple-color="dark"
        style={{ float: "right" }}
        onClick={() => dispatch(deleteMovie(movie.id))}
      >
        Delete
      </button>
    </li>
  );
}
