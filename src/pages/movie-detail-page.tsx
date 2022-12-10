import { Container, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import AsyncImage from "../components/common/async-image";
import { IMAGE_PREFIX } from "../constants";
import { Movie } from "../types/movie";

function MovieDetailsPage() {
  const { title, overview, release_date, poster_path } =
    useLoaderData() as Movie;

  return (
    <Stack py={10} minHeight="100vh">
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} p={2}>
          <AsyncImage src={`${IMAGE_PREFIX}/${poster_path}`} height={500} />
          <Stack>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="subtitle2">{overview}</Typography>
            <Typography variant="body2">{release_date}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default MovieDetailsPage;
