import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import "styles/template.css";
//import App from "components/APITester/App.jsx";
import AppRouter from "components/AppRouter/AppRouter";
import {ProviderWrapper as AppProvider} from 'contexts/appContext';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <AppRouter />
      {/* <App/> */}
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
