import { Button, Card, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export default async function SigleBlog({ params }: PostPageProps) {
  const singleBlog = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}/comments`
  );

  const blog: blogs = await singleBlog.json();

  const commentsRes: comments[] = await comments.json();

  return (
    <Stack mt={5}>
      <Stack direction="row" alignItems="center" gap={1} my={3}>
        <ArrowBackIcon />
        <Link href="/">back</Link>
      </Stack>

      <Typography
        variant="h2"
        align="center"
        textTransform="capitalize"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {blog.title}
      </Typography>

      <Typography variant="body1" mt={3}>
        {blog.body}
      </Typography>
      <Stack mt={5}>
        <Typography variant="h4">Comments</Typography>

        <Stack gap={2} mt={2}>
          {commentsRes.map((item, index: number) => (
            <Card
              key={index}
              sx={{
                p: 2,
                borderRadius: 3,
                background: "transparent",
                border: "1px solid white",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                }}
              >
                {item.body}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                mt={2}
                sx={{
                  color: "grey",
                }}
              >
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.email}</Typography>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
