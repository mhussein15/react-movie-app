import { useDispatch } from "react-redux";
import { watchedMovie, deleteMovie } from "../store/actions";
export default function MovieItem({ movie }) {
  const dispatch = useDispatch();

  return (
    <li class="list-group-item">
      <h2 style={{ display: "contents" }} className="lead">
        {movie.name}
      </h2>
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
