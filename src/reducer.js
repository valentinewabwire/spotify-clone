export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //TODO: remove after finishing development
  // token:
  //   "BQD7WbahOw1VdZGenhbH6DYH4UPxwr5x_qo1LHGwG9c74QFUjZsQHJ5deVveosxFb7sRIdV7CerqN3__fKcxoVpYQGEJjyLnF9TSt-4u6nCs3uAKGWgt2T1FE0h1uRO7r3XW7iUNONNXgGlkR-Hw-UQvL82QOM3HSidtGkAGGhmcBMmEPRB_",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
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
