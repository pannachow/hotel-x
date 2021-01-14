import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
};

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
          <Link component={RouterLink} to={"/"} color="inherit" underline="none">
            <HotelLogo />
          </Link>

          <div>
            <Typography variant="h6">Get around</Typography>
            {links.map((link) => (
              <Typography key={link.to} variant="subtitle1">
                <Link component={RouterLink} to={link.to} color="inherit">
                  {link.name}
                </Link>
              </Typography>
            ))}
          </div>

          <div>
            <Typography variant="h6">Contact</Typography>
            <Box display="flex" my={1}>
              <RoomIcon />
              <Typography variant="subtitle1">Amsterdam, The Netherlands</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" pr={6}>
              <Link href="https://wa.link/osc6ez" color="inherit">
                <WhatsAppIcon style={styles.socialMedia} />
              </Link>
              <Link href="https://www.facebook.com/ymchowym/" color="inherit">
                <FacebookIcon  style={styles.socialMedia} />
              </Link>
              <Link href="https://www.instagram.com/miss.pannapanna/" color="inherit">
                <InstagramIcon  style={styles.socialMedia} />
              </Link>
              <Link href="mailto:chowpanna@gmail.com" color="inherit">
                <MailOutlineIcon  style={styles.socialMedia} />
              </Link>
              <Link href="https://pannachow.io" color="inherit">
                <LanguageIcon  style={styles.socialMedia} />
              </Link>
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
