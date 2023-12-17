import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { pageName: "Street & Urban", pageLink: "/street-portfolio" },
  { pageName: "Landscapes", pageLink: "/landscape-portfolio" },
  { pageName: "Nature & Forest", pageLink: "/nature-forest-portfolio" },
  { pageName: "Wildlife", pageLink: "/wild-life-portfolio" },
  /* { pageName: "Highlights & Throwbacks", pageLink: "/highlights" }, */
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#183D3D" }}>
      <Container maxWidth="xl" sx={{ paddingLeft: "0px", marginLeft: "0px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={require("../assets/Logo Wasserzeichen Weiß Logo Links.png")}
              alt=""
              style={{ height: "100%", width: "300px", display: "inline-flex" }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.pageName}
                  href={page.pageLink}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#93B1A6",
                    display: "block",
                    ":hover": { color: "white", bgcolor: "#5C8374" },
                  }}
                >
                  {page.pageName}
                </Button>
              ))}
              {/*  <Button
                key="about-me"
                href=""
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#93B1A6",
                  display: "block",
                  ":hover": { color: "white", bgcolor: "#5C8374" },
                }}
              >
                About
              </Button> */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={require("../assets/Logo Wasserzeichen Weiß Logo Links.png")}
              alt=""
              style={{ height: "100%", width: "300px", display: "inline-flex" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.pageName}
                href={page.pageLink}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#93B1A6",
                  display: "block",
                  ":hover": { color: "white", bgcolor: "#5C8374" },
                }}
              >
                {page.pageName}
              </Button>
            ))}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                },
              }}
            >
              {/*  <Button
                key="about-me"
                href=""
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#93B1A6",
                  ":hover": { color: "white", bgcolor: "#5C8374" },
                }}
              >
                About
              </Button> */}
              {/*   <Button
                key="contact"
                href=""
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#93B1A6",
                  ":hover": { color: "white", bgcolor: "#5C8374" },
                }}
              >
                Contact
              </Button> */}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
