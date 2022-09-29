//RTK query allows us to more easily make API calls
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //builder allows us to build a specific req
    //* Get movies by [Type]
    getMovies: builder.query({
      query: () => {
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

// whenever we make any endpoint using RTK query,  it automatically creates us an Hook which executes that query
export const { useGetMoviesQuery } = tmdbApi;
