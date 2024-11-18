import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";
import theme from "./MUI/Theme";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm3aj12de03qj06wd2k2fywxm/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
