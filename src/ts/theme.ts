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
      default: "#121212",
      paper: "#121212",
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
  components: {
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          sx: {
            width: "100%"
          }
        }
      }
    }
  }
});

export default theme;
