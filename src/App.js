import "mdb-ui-kit/css/mdb.min.css";
import MovieInput from "./Components/MovieInput";
import MovieList from "./Components/MovieList";
function App() {
  return (
    <div className="container">
      <MovieInput />
      <MovieList />
    </div>
  );
}

export default App;
