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
        p: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid mt={6} pb={2}>
            {/*   <L6ink href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </L6ink> */}
            <Link
              href="https://www.instagram.com/luca_liam.photography"
              color="inherit"
              sx={{ pl: 4, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://github.com/LiamSchaefer" color="inherit">
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography
            variant="body2"
            color="white"
            align="center"
            fontSize={11}
            pb={2}
          >
            <p>
              All rights reserved. <br /> No part of this puplication can be
              reproduced, stored in a retrieval system or transmitted in any
              form or by any means, <br /> electronic, mechanical or
              photocopying, recording, or otherwise without the prior permission
              of the publisher.
            </p>
          </Typography>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://luca-liam-photography.de/">
              www.luca-liam-photography.de
            </Link>{" "}
            {new Date().getFullYear()}
            <p>Development ~ © Luca Liam Schäfer</p>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
