import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const movies = useSelector((state) => state.movies);

  // const toWatchList = movies.filter((movies) => movies.watched === true);
  // const WatchedList = movies.filter((movies) => movies.watched === false);

  const toWatchList = [];
  const WatchedList = [];

  movies.map((movie) => {
    if (movie.watched === true) {
      toWatchList.push(movie);
    } else if (movie.watched === false) {
      WatchedList.push(movie);
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5  p-3 m-2">
          <h1 className="lead">
            Watchlist{" "}
            <span style={{ float: "right" }}>{toWatchList.length}</span>
          </h1>
          <ul class="list-group">
            {toWatchList.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </ul>
        </div>
        <div className="col-5  p-3 m-2 ms-auto">
          <h1 className="lead">
            Watched <span style={{ float: "right" }}>{WatchedList.length}</span>
          </h1>
          <ul class="list-group">
            {WatchedList.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
