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

  console.log(movies);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Watched</h1>
          <ul class="list-group">
            {toWatchList.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h1>To Watched</h1>
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
