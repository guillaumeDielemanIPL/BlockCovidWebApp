import React from "react";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
const InscriptionEtablissementView = () => {
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <form action="#">
            <div className="scoped-data">
              <label>{textes.NOM_ETABLISSEMENT}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM_ETABLISSEMENT}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.ADRESSE}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_ADRESSE}
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
              <div className="scoped-inner"></div>
              <button type="submit">{textes.CREER_COMPTE}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionEtablissementView;
