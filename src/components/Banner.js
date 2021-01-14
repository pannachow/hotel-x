import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Underline from "./Underline";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -2,
    backgroundImage: "url(banner.jpeg)",
    backgroundSize: "cover",
    opacity: 0.8,
    filter: "brightness(80%)",
    height: "80vh",
  },
  content: {
    height: "80vh",
    textAlign: "center",
    color: "white",
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <Container className={classes.content}>
        <Box py={20}>
          <Typography variant="h1">UPGRADE YOUR WEEKENDS</Typography>
          <Underline />
          <br />
          <Typography variant="h4" gutterBottom>
            Enjoy secret offers up to -20% off
          </Typography>
          <br />
          <br />
          <Button variant="contained" component={Link} to={`/book`} color="secondary" size="large">
            Book Now
          </Button>
        </Box>
      </Container>
      <div className={classes.background}></div>
    </div>
  );
}