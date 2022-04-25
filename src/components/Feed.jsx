import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
<<<<<<< HEAD
    <Box flex={2} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={2}>
=======
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
>>>>>>> 7201ae3332c3cd157911099adf7c6e5ada6ec3e3
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
<<<<<<< HEAD
          <Post />     
=======
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
>>>>>>> 7201ae3332c3cd157911099adf7c6e5ada6ec3e3
        </>
      )}
    </Box>
  );
};

export default Feed;
