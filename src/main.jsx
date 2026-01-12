import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.jsx";

import UsersContext from "./context/UsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <UsersContext>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </UsersContext>
);
