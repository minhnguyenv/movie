import { Stack, Typography } from "@mui/material";

function ErrorPage() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Stack alignItems="center" justifyContent="center" spacing={3}>
        <Typography variant="h3">Oops!</Typography>
        <Typography>Sorry, an unexpected error has occurred.</Typography>
      </Stack>
    </Stack>
  );
}

export default ErrorPage;
