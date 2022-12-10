import { Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import movieApi from "../api/movie-api";
import { MOVIE_TYPE } from "../constants";
import MovieListHeader from "../containers/movie-list/movie-list-header";
import MovieListSection from "../containers/movie-list/movie-list-section";
import MovieListSkeleton from "../containers/movie-list/movie-list-skeleton";
import MovieListTabBar from "../containers/movie-list/movie-list-tab-bar";
import usePullToRefresh from "../hooks/use-pull-to-refresh";
import { Movie } from "../types/movie";

function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState(MOVIE_TYPE.NOW_PLAYING);

  const handleFetchMovies = async () => {
    try {
      setLoading(true);
      const data = await movieApi.getCurrentlyMovies();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  usePullToRefresh({
    onRefresh: () => {
      setTimeout(() => {
        setMovies([]);
        handleFetchMovies();
      }, 1000);
    },
  });

  useEffect(() => {
    handleFetchMovies();
  }, []);

  const handleSearchChange = (value: string) => {
    const newMovies = [...movies].filter((movie) => {
      return movie.title?.includes(value);
    });

    setMovies(newMovies);
  };

  const handleTypeChange = (type: MOVIE_TYPE) => {
    console.log({ type });

    setType(type);
  };

  return (
    <Stack py={10} minHeight="100vh">
      <Container maxWidth="lg">
        {error ? (
          <Typography>{error}</Typography>
        ) : (
          <>
            <MovieListHeader onSearchChange={handleSearchChange} />
            <MovieListTabBar type={type} onTypeChange={handleTypeChange} />
            <Grid container spacing={3}>
              {loading ? (
                <MovieListSkeleton />
              ) : (
                <MovieListSection movies={movies} />
              )}
            </Grid>
          </>
        )}
      </Container>
    </Stack>
  );
}

export default MovieListPage;
