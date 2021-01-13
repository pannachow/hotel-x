import React,  { useState }  from "react";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductCategories from "./components/ProductCategories";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    // flexGrow: 1,
    // flexShrink: 0,
  },
  footer: {
    flexShrink: 0,
  }
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'));

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Banner />
        <ProductCategories />
      <section className={classes.footer}>
        <Footer />
      </section>
      
    </ThemeProvider>
  );
}

export default App;
