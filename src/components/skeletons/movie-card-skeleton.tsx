import { Card, Skeleton, Stack } from "@mui/material";

export default function MovieCardSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangular" width={300} height={300} />
      <Stack p={2}>
        <Skeleton variant="text" />
        <Skeleton variant="text" height={100} />
        <Skeleton variant="text" />
      </Stack>
    </Card>
  );
}
