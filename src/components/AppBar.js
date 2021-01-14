import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    flexGrow: 1,
    marginLeft: 10,
  },
}));

export default function ButtonAppBar({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const links = [
    { name: "Rooms", to: "/rooms" },
    { name: "Reservations", to: "/reservations" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.brand}>
            <Link color="inherit" underline="none" component={RouterLink} to={"/"}>
              <Box display="flex" alignItems="center">
                <img src="hotel-x-icon.png" alt="Hotel logo" width="48" height="48" />
                <Typography variant="h6">&nbsp;HOTEL X</Typography>
              </Box>
            </Link>
          </div>

          {darkMode ? <Brightness4OutlinedIcon /> : <Brightness5TwoToneIcon />}
          <Switch
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
            color="default"
            name="darkMode"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />

          {links.map((link) => (
            <Button color="inherit">
              <Link color="inherit" underline="none" component={RouterLink} to={link.to}>
                {link.name}
              </Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}