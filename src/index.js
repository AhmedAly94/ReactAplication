import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
//import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//registerServiceWorker();
