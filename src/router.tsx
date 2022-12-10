import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import MovieDetailsPage from "./pages/movie-detail-page";
import MovieListPage from "./pages/movie-list-page";
import movieApi from "./api/movie-api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movie/:movieId",
    element: <MovieDetailsPage />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) =>
      await movieApi.getMovieDetails(params.movieId as string),
  },
]);

export default router;
