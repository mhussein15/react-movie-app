const DELETE_MOVIE = "DELETE_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (movieID) => {
  return {
    type: DELETE_MOVIE,
    payload: { movieID },
  };
};

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: { newMovie }, // {newPerson: newPerson}
  };
};
