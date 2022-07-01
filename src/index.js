import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
/*import Login from "./htmlcomponents/Login";*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/*import Forget from "./Forget_Pass/Forget";*/
import Reset from "./Reset_Pass/Reset";
import Update from "./Update_Pass/Update";
import Forget from "./Forget_Pass/Forget";
import User from "./User/User";

/*import Update from "./Update_Pass/Update";*/
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <User />
  </BrowserRouter>
);
