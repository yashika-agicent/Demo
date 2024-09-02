import { combineReducers } from "redux";
import favoritesReducer from "./favoriteSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  //add new reducers here..
});

export default rootReducer;
