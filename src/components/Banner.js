import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  underline: {
    width: "73px",
    height: "4px",
    margin: "0 auto",
    display: "block",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <>
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", color: "white" }}
      >
        <Typography variant="h1" component="h1">
          UPGRADE YOUR WEEKENDS
        </Typography>
        <span className={classes.underline}></span>
        <br/>
        <Typography variant="h4" component="h4" gutterBottom>
            Enjoy secret offers up to -20% off
        </Typography>
        <br/>
        <br/>
        <Button variant="contained" color="primary" size="large">
          Book Now
        </Button>

        <div
          style={{
            backgroundImage: "url(banner.jpeg)",
            // height: "100vh",
            position: "absolute",
            opacity: 0.8,
            filter: "brightness(80%)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
            backgroundSize: "cover",
          }}
        ></div>
      </Container>
    </>
  );
}