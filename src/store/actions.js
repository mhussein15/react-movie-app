const DELETE_MOVIE = "DELETE_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";
const WATCHED_MOVIE = "WATCHED_MOVIE";
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


export const watchedMovie = (movie) => {
    return {
      type: WATCHED_MOVIE,
      payload: { movie}, // {newPerson: newPerson}
    };
  };
  