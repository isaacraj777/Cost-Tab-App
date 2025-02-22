import "./index.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <HelmetProvider>
    <HashRouter>
      <Suspense>
        <App />
      </Suspense>
    </HashRouter>
  </HelmetProvider>
);
