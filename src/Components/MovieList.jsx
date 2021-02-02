import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const movies = useSelector((state) => state.toWatch);

  const movieslist = movies.map((movie) => <MovieItem movie={movie} />);
  console.log(movies);
  return (
    <div>
      <ul class="list-group">{movieslist}</ul>
    </div>
  );
}
