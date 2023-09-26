import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#183D3D",
        color: "white",
        p: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid paddingTop={8} justifyContent="flex-end">
            <Typography variant="h6" color="white" gutterBottom>
              You wanna see more?
            </Typography>
            {/*   <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link> */}
            <Link
              href="https://www.instagram.com/luca_liam.photography"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://github.com/LiamSchaefer" color="inherit">
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://luca-liam-photography.de/">
              www.luca-liam-photography.de
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
            <p>Development ~ Luca Liam Schäfer</p>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
