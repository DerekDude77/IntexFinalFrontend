import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;
  const theme = useTheme();

  return (
    <Paper
      // sx={{
      //   position: "relative",
      //   backgroundColor: "grey.800",
      //   color: "#fff",
      //   mb: 4,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundImage: `url(${post.image})`,
      // }}
      sx={{
        position: "relative",
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
        height: "60vh", // Set the height of the Paper component
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            // sx={{
            //   position: "relative",
            //   p: { xs: 3, md: 6 },
            //   pr: { md: 0 },
            // }}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "95%", // Set the height of the Grid container to 50%
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Set a black background with 70% opacity
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{
                fontFamily: "Adler",
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{
                fontFamily: "Adler",
              }}
            >
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
