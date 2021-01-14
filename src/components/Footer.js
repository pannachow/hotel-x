import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import HotelLogo from "./HotelLogo";
import RoomIcon from "@material-ui/icons/Room";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";

const styles = {
  socialMedia: {
    fontSize: 28,
  },
  floatLeft: {
    float: "left",
  },
};

export default function Footer() {
  const theme = useTheme();
  const getAroundLinks = [
    { name: "Home", to: "/" },
    { name: "Rooms", to: "/rooms" },
    { name: "Reservations", to: "/reservations" },
    { name: "Contact", to: "/contact" },
  ];
  const socialMediaLinks = [
    { href: "https://wa.link/osc6ez", type: WhatsAppIcon },
    { href: "https://www.facebook.com/ymchowym", type: FacebookIcon },
    { href: "https://www.instagram.com/miss.pannapanna", type: InstagramIcon },
    { href: "mailto:chowpanna@gmail.com", type: MailOutlineIcon },
    { href: "https://pannachow.io", type: LanguageIcon },
  ];

  return (
    <Box bgcolor={theme.palette.type === "dark" ? "background.paper" : "primary.light"} py={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Link component={RouterLink} to={"/"} color="inherit" underline="none">
              <HotelLogo style={styles.floatLeft} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Get around</Typography>
            {getAroundLinks.map((link) => (
              <Typography key={link.to} variant="subtitle1">
                <Link component={RouterLink} to={link.to} color="inherit">
                  {link.name}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <Box display="flex" my={1}>
              <RoomIcon />
              <Typography variant="subtitle1">Amsterdam, The Netherlands</Typography>
            </Box>

            <Box display="flex">
              {socialMediaLinks.map((link) => (
                <Box key={link.href} mr={4}>
                  <Link href={link.href} color="inherit">
                    <link.type style={styles.socialMedia} />
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
