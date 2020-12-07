import React, { useState } from "react";
import axios from "axios";
import apiUrls from "urls/apiUrls";
import urls from "urls/urls";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
import { useHistory } from "react-router-dom";

const InscriptionEtablissementView = () => {
  const [nom, setnom] = useState("");
  const [adresse, setadresse] = useState("");
  const [email, setemail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const onChangeNom = (event) => {
    event.preventDefault();
    setnom(event.target.value);
  };
  const onChangeAdresse = (event) => {
    event.preventDefault();
    setadresse(event.target.value);
  };
  const onChangeEmail = (event) => {
    event.preventDefault();
    setemail(event.target.value);
  };
  const onChangeMDP = (event) => {
    event.preventDefault();
    setmotDePasse(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    const etablissement = {
      nom: nom,
      adresse: adresse,
      email: email,
      password: motDePasse,
    };
    console.log(etablissement);
    axios
      .post(apiUrls.INSCRIPTION_ETABLISSEMENT, etablissement)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data);
        history.push(urls.ETABLISSEMENT_CONNECTED)
      })
      .catch((error) => {
        console.error(error.response.data.error);
        setError(error.response.data.error);
      });
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <div className="has-error help-block text-center">{error}</div>
          <form action="#">
            <div className="scoped-data">
              <label>{textes.NOM_ETABLISSEMENT}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM_ETABLISSEMENT}
                onChange={onChangeNom}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.ADRESSE}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_ADRESSE}
                onChange={onChangeAdresse}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MAIL}</label>
              <input
                type="email"
                placeholder={textes.PLACEHOLDER_MAIL}
                onChange={onChangeEmail}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MOT_DE_PASSE}</label>
              <input type="password" onChange={onChangeMDP} required />
            </div>
            <div className="scoped-btn">
              <div className="scoped-inner" />
              <button type="submit" onClick={onSubmit}>
                {textes.CREER_COMPTE}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionEtablissementView;
