import React from "react";
import textes from "strings/medecinStrings";
import URLS from "urls/urls";
import { useHistory } from "react-router-dom";
const HeaderLogged = () => {
  const history = useHistory();
  const onLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push(URLS.ACCUEIL);
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-default active">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                {textes.APP_NAME}
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <p>
                    <button
                      className="btn btn-default navbar-btn"
                      onClick={onLogout}
                    >
                      {textes.DECONNEXION}
                    </button>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default HeaderLogged;
