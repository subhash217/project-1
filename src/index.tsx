import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./polyfills";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.scss";
import Root from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";

function initialBoot() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <Root />
        </StrictMode>
      </BrowserRouter>
    </Provider>
  );
}

render(initialBoot(), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
