import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DarkModeSwitch from "./DarkModeSwitch";

export default function DesktopMenu({ darkMode, setDarkMode, links }) {
  return (
    <>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />

      {links.map((link) => (
        <Button key={link.to} color="inherit" component={RouterLink} to={link.to}>
          {link.name}
        </Button>
      ))}
    </>
  );
}
