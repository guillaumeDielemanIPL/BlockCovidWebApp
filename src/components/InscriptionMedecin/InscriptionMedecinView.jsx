import React from "react";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
const InscriptionMedecinView = () => {
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <form action="#">
            <div className="scoped-data">
              <label>{textes.NOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.PRENOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_PRENOM}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MAIL}</label>
              <input
                type="email"
                placeholder={textes.PLACEHOLDER_MAIL}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MOT_DE_PASSE}</label>
              <input type="password" required />
            </div>
            <div className="scoped-btn">
              <div className="scoped-inner" />
              <button type="submit">{textes.CREER_COMPTE}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionMedecinView;