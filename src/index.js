import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import "styles/template.css";
//import App from "components/APITester/App.jsx";
import AppRouter from "components/AppRouter/AppRouter";
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
