import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee6c13",
    },
    secondary: {
      main: "#ffaa39",
    },
    background: {
      default: "#2e2e2e",
    },
    text: {
      primary: "#e8e8ea",
      secondary: "#e8e8ea",
    },
    info: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    allVariants: {
      color: "#e8e8ea",
    },
  },
});

export default theme;
