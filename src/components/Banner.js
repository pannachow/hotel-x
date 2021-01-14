import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Underline from "./Underline";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -2,
    backgroundImage: "url(banner.jpg)",
    backgroundSize: "cover",
    opacity: 0.8,
    filter: "brightness(80%)",
    height: "80vh",
  },
  content: {
    minHeight: "80vh",
    textAlign: "center",
    color: "white",
  },
  book: {
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div style={{ position: "relative" }}>
      <Container className={classes.content}>
        <Box display="flex" flexDirection="column" justifyContent="center" height="80vh">
          <Typography variant={isDesktop ? "h2" : "h4"}>UPGRADE YOUR WEEKENDS</Typography>
          <Underline />
          <br />
          <Typography variant={isDesktop ? "h4" : "h5"} gutterBottom>
            Enjoy secret offers up to -20% off
          </Typography>
          <br />
          <br />
          <Button
            className={classes.book}
            variant="contained"
            component={Link}
            to={`/book`}
            color="secondary"
            size="large"
          >
            Book Now
          </Button>
        </Box>
      </Container>
      <div className={classes.background}></div>
    </div>
  );
}
