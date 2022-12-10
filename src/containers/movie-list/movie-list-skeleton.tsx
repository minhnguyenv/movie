import { Grid } from "@mui/material";
import MovieCardSkeleton from "../../components/skeletons/movie-card-skeleton";

function MovieListSkeleton() {
  return (
    <>
      {Array.from(Array(4).keys()).map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item}>
          <MovieCardSkeleton />
        </Grid>
      ))}
    </>
  );
}

export default MovieListSkeleton;
