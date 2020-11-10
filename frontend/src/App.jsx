import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#7c42bd",
      main: "#4a138c",
      dark: "#12005e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#f95688",
      main: "#c1185b",
      dark: "#8b0032",
      contrastText: "#ffffff",
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <div className="App">
          <ToDoList />
        </div>
      </ThemeProvider>
    );
  }
}
