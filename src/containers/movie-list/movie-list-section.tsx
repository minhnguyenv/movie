import { Grid } from "@mui/material";
import MovieCard from "../../components/common/movie-card";
import { Movie } from "../../types/movie";

interface IMovieListSectionProps {
  movies?: Movie[];
}

function MovieListSection({ movies }: IMovieListSectionProps) {
  return (
    <>
      {movies?.map((movie) => (
        <Grid item xs={12} sm={6} md={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </>
  );
}

export default MovieListSection;
