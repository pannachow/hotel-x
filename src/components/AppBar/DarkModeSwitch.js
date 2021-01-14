import React from "react";
import Switch from "@material-ui/core/Switch";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  return (
    <>
      {darkMode ? <Brightness4OutlinedIcon /> : <Brightness5TwoToneIcon />}
      <Switch
        checked={darkMode}
        onChange={(event) => setDarkMode(event.target.checked)}
        color="default"
        name="darkMode"
        inputProps={{ "aria-label": "toggle dark mode" }}
      />
    </>
  );
}
