import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider disableBaseline={true}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
