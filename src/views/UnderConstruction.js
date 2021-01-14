import Typography from "@material-ui/core/Typography";
import Underline from "../components/Underline";
import BuildIcon from "@material-ui/icons/Build";
import WarningIcon from '@material-ui/icons/Warning';

export default function UnderConstruction() {
  return (
    <>
      <Typography align="center">
        <WarningIcon fontSize="large" />
      </Typography>
      <br />
      <Typography align="center" variant="h2">
        THIS PAGE IS UNDER CONSTRUCTION
      </Typography>
      <Underline />
      <br />
      <br />
      <Typography align="center" variant="h4">
        PLEASE VISIT US IN 2022 FOR MORE
      </Typography>
      <br />
      <Typography align="center">
        <BuildIcon fontSize="large" />
      </Typography>
    </>
  );
}
