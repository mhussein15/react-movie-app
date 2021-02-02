import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/actions";
import { useState } from "react";
export default function MovieInput() {
  const dispatch = useDispatch();
  const lastID = useSelector((state) => state.lastID);

  const [movie, setMovie] = useState({
    id: lastID,
    name: "",
    image: "",
    watched: true,
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    setMovie({
      id: lastID + 1,
      name: "",
      image: "",
      watched: true,
    });
  };
  return (
    <div className="p-5 d-flex justify-content-center">
      <form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="name"
            value={movie.name}
            onChange={handleChange}
            id="form1Example1"
          />
          <label className="form-label" for="form1Example1">
            Add Movie
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="image"
            value={movie.image}
            onChange={handleChange}
            id="form1Example1"
          />
          <label className="form-label" for="form1Example1">
            Add Movie's Image
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add
        </button>
      </form>
    </div>
  );
}
