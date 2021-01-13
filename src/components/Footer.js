import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import HotelLogo from "./HotelLogo";

export default function Footer() {
  const theme = useTheme();
  const links = [
    { name: "Home", to: "/" },
    { name: "Rooms", to: "/rooms" },
    { name: "Reservations", to: "/reservations" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <Box bgcolor={theme.palette.type === "dark" ? "background.paper" : "primary.light"} py={6}>
      <Container>
        <Box display="flex" justifyContent="space-around">
          <HotelLogo />

          <div>
            <Typography variant="h6">Get around</Typography>
            {links.map((link) => (
              <Typography variant="subtitle1">
                <Link component={RouterLink} to={link.to} color="inherit">
                  {link.name}
                </Link>
              </Typography>
            ))}
          </div>

          <div>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="subtitle1">Amsterdam, The Netherlands</Typography>
            <Typography variant="subtitle1">+31 645833745</Typography>
            <Typography variant="subtitle1">
              <Link color="inherit" href="mailto:chowpanna@gmail.com">
                chowpanna@gmail.com
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link color="inherit" href="https://pannachow.io">
                pannachow.io
              </Link>
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
