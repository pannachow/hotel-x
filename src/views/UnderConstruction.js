import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BuildIcon from "@material-ui/icons/Build";
import WarningIcon from "@material-ui/icons/Warning";
import Underline from "../components/Underline";

export default function UnderConstruction() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box p={2}>
      <Typography align="center">
        <WarningIcon fontSize="large" />
      </Typography>
      <br />
      <Typography align="center" variant={isDesktop ? "h2" : "h4"}>
        THIS PAGE IS UNDER CONSTRUCTION
      </Typography>
      <Underline />
      <br />
      <br />
      <Typography align="center" variant={isDesktop ? "h4" : "h5"}>
        PLEASE VISIT US IN 2022 FOR MORE
      </Typography>
      <br />
      <Typography align="center">
        <BuildIcon fontSize="large" />
      </Typography>
    </Box>
  );
}
