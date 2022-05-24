import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import "bootstrap/dist/css/bootstrap.css";
import { ethers } from "ethers";
import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ContextProvider } from "./components/ContextAPI";
import { Header } from "./components/Header/Header";
import "./index.css";
// import store from "./store/store";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <ContextProvider>
      {/* <React.StrictMode> */}
      {/* <Header /> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </React.StrictMode> */}
    </ContextProvider>
  </Web3ReactProvider>
);
