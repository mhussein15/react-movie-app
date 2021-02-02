const initialState = {
  toWatch: [],
  unwatched: [],
  lastID: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      const filteredProduct = state.products.filter(
        (product) => product.id !== action.payload.productID
      );
      return {
        ...state,
        products: filteredProduct,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        toWatch: [...state.toWatch, action.payload.newMovie],
        lastID: state.lastID + 1,
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
