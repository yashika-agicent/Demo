import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    movies: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    deleteAllFavorite: (state) => {
      state.movies = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, deleteAllFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
