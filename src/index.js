import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import App from "./screens/shop/App";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import {Amplify} from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/**<App/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
