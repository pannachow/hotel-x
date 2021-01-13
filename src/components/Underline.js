import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  underline: {
    width: "73px",
    height: "4px",
    margin: "0 auto",
    display: "block",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Underline() {
  const classes = useStyles();

  return <span className={classes.underline}></span>;
}
