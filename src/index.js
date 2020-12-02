import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import "styles/template.css";
//import App from "components/APITester/App.jsx";
import HomeView from "components/Home/HomeView.jsx";
ReactDOM.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>,
  document.getElementById("root")
);
