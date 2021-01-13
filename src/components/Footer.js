import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <Box bgcolor="primary.light" py={6}>
      <Container>
        <Box display="flex" justifyContent="space-around">
          <img src="hotel-x-icon.png" alt="Hotel logo" width="100" height="100" />

          <div>
            <Typography variant="h6">Get around</Typography>
            <Typography variant="subtitle1">Home</Typography>
            <Typography variant="subtitle1">Rooms</Typography>
            <Typography variant="subtitle1">Reservation</Typography>
          </div>
          <div>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="subtitle1">Amsterdam, The Netherlands</Typography>
            <Typography variant="subtitle1">+31 645833745</Typography>
            <Typography variant="subtitle1">
              <Link href="mailto:chowpanna@gmail.com">chowpanna@gmail.com</Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link href="https://pannachow.io">pannachow.io</Link>
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
