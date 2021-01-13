import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./views/Home";

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState(
    "darkMode",
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route>boo hoo</Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
