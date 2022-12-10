import { Card, Stack, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IMAGE_PREFIX } from "../../constants";
import { Movie } from "../../types/movie";
import AsyncImage from "./async-image";

interface IMovieCardProps {
  movie: Movie;
}

export default function MovieCard(props: IMovieCardProps) {
  const { movie } = props;
  const { id, title, overview, release_date, poster_path } = movie;

  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ ":hover": { boxShadow: "0px 0px 5px gray" } }}>
        <AsyncImage src={`${IMAGE_PREFIX}/${poster_path}`} width="100%" />
        <Stack spacing={2} p={2}>
          <Tooltip title={title}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {title}
            </Typography>
          </Tooltip>
          <Typography
            variant="subtitle2"
            height={90}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="normal"
          >
            {overview}
          </Typography>
          <Typography variant="body2">{release_date}</Typography>
        </Stack>
      </Card>
    </Link>
  );
}
