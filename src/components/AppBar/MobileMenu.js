import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuIcon from "@material-ui/icons/Menu";
import DarkModeSwitch from "./DarkModeSwitch";

const styles = {
  menu: {
    width: "100%",
  },
};

export default function MobileMenu({ darkMode, setDarkMode, links }) {
  // https://material-ui.com/components/menus/#menulist-composition

  const history = useHistory();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  function handleNavigate(to) {
    setOpen(false);
    history.push(to);
  }
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        color="inherit"
        aria-label="menu"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Popper
        style={styles.menu}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <Box display="flex" flexDirection="row" ml={1} p={1} alignItems="center">
                    <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
                  </Box>
                  <Divider />
                  {links.map((link) => (
                    <MenuItem key={link.to} onClick={() => handleNavigate(link.to)}>
                      {link.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
