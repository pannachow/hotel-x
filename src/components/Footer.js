import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <Box bgcolor="primary.light" py={4}>
      <Container>
        <Box display="flex" justifyContent="space-around">
          <img
            src="hotel-x-icon.png"
            alt="hotel logo"
            width="100"
            height="100"
          />

          <div>
            <Typography variant="h6">Get around</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Home
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Rooms
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Reservation
            </Typography>
          </div>
          <div>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Amsterdam, The Netherlands
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              +31 645833745
            </Typography>
            <a href="mailto:chowpanna@gmail.com">chowpanna@gmail.com</a>
            <br />
            <a href="https://pannachow.io/">https://pannachow.io/</a>
          </div>
        </Box>
        {/* <Grid container>
        <Grid item xs={6}>
          LEFT GOES HERE
        </Grid>

        <Grid item xs={6}>
            <Typography variant="h5" component="h5">
              Contact
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
              Amsterdam, The Netherlands
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
              +31 645833745
            </Typography>
            <a href="mailto:chowpanna@gmail.com">chowpanna@gmail.com</a>
            <br />
            <a href="https://pannachow.io/">https://pannachow.io/</a>
        </Grid>
      </Grid> */}
      </Container>
    </Box>
  );
}
