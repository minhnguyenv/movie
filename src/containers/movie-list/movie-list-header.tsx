import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import MovieListSearchBar from "../../components/pages/movie-list/movie-list-search-bar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GridViewIcon from "@mui/icons-material/GridView";

interface IMovieListHeaderProps {
  onSearchChange: (value: string) => void;
}

function MovieListHeader({ onSearchChange }: IMovieListHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
      >
        Currently movie list
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Tooltip title="List">
          <IconButton>
            <ListAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Grid">
          <IconButton>
            <GridViewIcon />
          </IconButton>
        </Tooltip>

        <MovieListSearchBar onSearchChange={onSearchChange} />
      </Stack>
    </Stack>
  );
}

export default MovieListHeader;
