import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ReactLenis root>
          <App />
        </ReactLenis>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
