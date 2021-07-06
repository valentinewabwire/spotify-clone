export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //TODO: remove after finishing development
  token:
    "BQD7WbahOw1VdZGenhbH6DYH4UPxwr5x_qo1LHGwG9c74QFUjZsQHJ5deVveosxFb7sRIdV7CerqN3__fKcxoVpYQGEJjyLnF9TSt-4u6nCs3uAKGWgt2T1FE0h1uRO7r3XW7iUNONNXgGlkR-Hw-UQvL82QOM3HSidtGkAGGhmcBMmEPRB_",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;
