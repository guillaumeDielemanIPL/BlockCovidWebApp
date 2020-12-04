import React from "react";
import { Link } from "react-router-dom";
import textes from "strings/accueilStrings";
import URLS from "urls/urls";
const Header = () => {
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
              <a className="navbar-brand" href="./index.html">
                {textes.APP_NAME}
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="todo">{textes.ACCUEIL}</a>
                </li>
                <li>
                  <a href="todo">{textes.INSCRIPTION}</a>
                </li>
                <li>
                  <p>
                    <Link
                      to={URLS.CONNEXION}
                      className="btn btn-default navbar-btn"
                    >
                      {textes.CONNEXION}
                    </Link>
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
export default Header;
