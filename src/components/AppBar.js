import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import HotelTwoToneIcon from '@material-ui/icons/HotelTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10
  },
  image: {
    width: '100%',
    position: "absolute",
  },
}));

export default function ButtonAppBar({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
        <HotelTwoToneIcon/>
          <Typography variant="h6" className={classes.title}>
            HOTEL X
          </Typography>

          {darkMode ? <Brightness4OutlinedIcon /> : <Brightness5TwoToneIcon />}
          <Switch
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
            color="default"
            name="darkMode"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />

          <Button color="inherit">Rooms</Button>
          <Button color="inherit">Reservations</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
