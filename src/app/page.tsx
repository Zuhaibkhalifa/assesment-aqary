import { Button, Card, Container, Stack, Typography } from "@mui/material";

import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: blogs[] = await data.json();

  return (
    <>
      <Typography variant="h2" align="center" py={4}>
        Blogs Assestment
      </Typography>
      <Grid container spacing={2}>
        {posts.map((item, index: number) => (
          <Grid key={index} size={{ xs: 6, md: 3 }} justifyContent="center">
            <Link href={`/post/${item.id}`}>
              <Card
                key={index}
                elevation={2}
                sx={{
                  background: "transparent",
                  cursor: "pointer",
                  border: "0.5px solid white",
                  p: 2,
                  borderRadius: 5,
                  "&:hover": {
                    border: " 0.5px solid grey",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                  }}
                >
                  {item.id}
                </Typography>
                <Typography
                  variant="h5"
                  color="info"
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {item.title.slice(0, 18)}
                </Typography>
                <Typography
                  variant="body2"
                  color="info"
                  mt={2}
                  sx={{
                    color: "grey",
                  }}
                >
                  {item.body}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    mt: 3,
                    background: "#000000",
                    textTransform: "capitalize",
                    color: "grey",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Read More
                </Button>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
