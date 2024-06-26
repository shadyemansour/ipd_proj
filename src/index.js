import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.min.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import Router from "./router";
import i18n from "./translation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

serviceWorkerRegistration.register();
