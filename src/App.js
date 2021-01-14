import React, { useMemo } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
// https://stackoverflow.com/a/64135466
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import UnderConstruction from "./views/UnderConstruction";

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorageState(
    "darkMode",
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = useMemo(
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
        <Box display="flex" flexDirection="column" height="100%">
          <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box flexGrow={1}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route component={UnderConstruction} />
            </Switch>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
