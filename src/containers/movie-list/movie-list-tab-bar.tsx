import { Box, Stack, Typography } from "@mui/material";
import { MOVIE_TYPE } from "../../constants";

interface IMovieListTabBarProps {
  type: MOVIE_TYPE;
  onTypeChange: (type: MOVIE_TYPE) => void;
}

function MovieListTabBar(props: IMovieListTabBarProps) {
  const { type, onTypeChange } = props;

  return (
    <Stack>
      {(Object.keys(MOVIE_TYPE) as Array<keyof typeof MOVIE_TYPE>).map(
        (type) => (
          <Box
            key={type}
            onClick={() => {
              onTypeChange(MOVIE_TYPE[type]);
            }}
          >
            <Typography>{MOVIE_TYPE[type]}</Typography>
          </Box>
        )
      )}
    </Stack>
  );
}

export default MovieListTabBar;
