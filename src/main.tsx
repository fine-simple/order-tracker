import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./ts/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./ts/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
