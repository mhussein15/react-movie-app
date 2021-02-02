const initialState = {
  movies: [],
  lastID: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      const filteredMovie = state.movies.filter(
        (movie) => movie.id !== action.payload.movieID
      );
      return {
        ...state,
        movies: filteredMovie,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload.newMovie],
        lastID: state.lastID + 1,
      };
    case "WATCHED_MOVIE":
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.movie.id
      );
      const newState = [...state.movies];
      newState[index] = action.payload.movie;
      return {
        ...state,
        movies: [...newState],
      };
    default:
      return state;
  }
};

export default reducer;
// case "UPDATE_PRODUCT":
//       const index = state.products.findIndex(
//         (product) => product.id === action.payload.updatedProduct.id
//       );
//       const newState = [...state.products];
//       if (index !== -1) {
//         newState[index] = action.payload.updatedProduct;
//       }
//       return {
//         ...state,
//         products: [...newState],
//         // lastID: state.lastID + 1,
//       };
