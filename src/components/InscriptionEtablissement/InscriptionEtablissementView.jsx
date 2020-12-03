import React from "react";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
const InscriptionEtablissementView = () => {
  return (
    <div className="background-colored">
      <div className="center">
        <div className="container">
          <div className="text">{textes.TITRE}</div>
          <form action="#">
            <div className="data">
              <label>{textes.NOM_ETABLISSEMENT}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM_ETABLISSEMENT}
                required
              />
            </div>
            <div className="data">
              <label>{textes.ADRESSE}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_ADRESSE}
                required
              />
            </div>
            <div className="data">
              <label>{textes.MAIL}</label>
              <input
                type="email"
                placeholder={textes.PLACEHOLDER_MAIL}
                required
              />
            </div>
            <div className="data">
              <label>{textes.MOT_DE_PASSE}</label>
              <input type="password" required />
            </div>
            <div className="btn">
              <div className="inner"></div>
              <button type="submit">{textes.CREER_COMPTE}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionEtablissementView;
