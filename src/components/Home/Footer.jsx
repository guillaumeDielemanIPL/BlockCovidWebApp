import React from "react";
import textes from "strings/homeStrings";
const Footer = () => {
  return (
    <footer className="footer-container white-text-container">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>{textes.APP_NAME}</h3>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <p>
                  <small>{textes.DEVELOPE_PAR}</small>
                </p>
              </div>
              <div className="col-xs-12 col-sm-5">
                <p className="text-right">
                  ©{textes.APP_NAME} {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
