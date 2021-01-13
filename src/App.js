import React,  { useState }  from "react";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

function App() {
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
      <CssBaseline />
      <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <Footer />      
    </ThemeProvider>
  );
}

export default App;
