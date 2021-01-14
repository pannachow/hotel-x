import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const styles = {
  root: {
    flexGrow: 1,
  },
  brand: {
    flexGrow: 1,
    marginLeft: 10,
  },
};

const links = [
  { name: "Rooms", to: "/rooms" },
  { name: "Reservations", to: "/reservations" },
  { name: "Contact", to: "/contact" },
];

export default function ButtonAppBar({ darkMode, setDarkMode }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div style={styles.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div style={styles.brand}>
            <Link color="inherit" underline="none" component={RouterLink} to={"/"}>
              <Box display="flex" alignItems="center">
                <img src="hotel-x-icon.png" alt="Hotel logo" width="48" height="48" />
                <Typography variant="h6">&nbsp;HOTEL X</Typography>
              </Box>
            </Link>
          </div>

          {isDesktop ? (
            <DesktopMenu darkMode={darkMode} setDarkMode={setDarkMode} links={links} />
          ) : (
            <MobileMenu darkMode={darkMode} setDarkMode={setDarkMode} links={links} />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
