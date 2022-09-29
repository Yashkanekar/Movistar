import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

// whenever we use the services , we have to add that as a reducer
export default configureStore({
  // out reducer is a service which we create
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
