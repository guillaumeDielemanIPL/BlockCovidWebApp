import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import apiUrls from "urls/apiUrls";
import urls from "urls/urls";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import appContext from 'contexts/appContext';

const InscriptionEtablissementView = () => {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {setRole, error, setError} = useContext(appContext);

  const initialLoad = () => setError("");
  useEffect(initialLoad,[setError]);

  const handleChangeNom = (event) => {
    event.preventDefault();
    setNom(event.target.value);
  };
  const handleChangeAdresse = (event) => {
    event.preventDefault();
    setAdresse(event.target.value);
  };
  const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleChangeMDP = (event) => {
    event.preventDefault();
    setMotDePasse(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const etablissement = {
      nom: nom,
      adresse: adresse,
      email: email,
      password: motDePasse,
    };
    axios
      .post(apiUrls.INSCRIPTION_ETABLISSEMENT, etablissement)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setRole('etablissement');
        localStorage.setItem("role",'etablissement');
        history.push(urls.ETABLISSEMENT_CONNECTED);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setLoading(false);
      });
    setNom("");
    setAdresse("");
    setEmail("");
    setMotDePasse("");
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <div className="error-msg text-center">{error}</div>
          <form onSubmit={handleSubmit}>
            <div className="scoped-data">
              <label>{textes.NOM_ETABLISSEMENT}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM_ETABLISSEMENT}
                onChange={handleChangeNom}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.ADRESSE}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_ADRESSE}
                onChange={handleChangeAdresse}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MAIL}</label>
              <input
                type="email"
                placeholder={textes.PLACEHOLDER_MAIL}
                onChange={handleChangeEmail}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.MOT_DE_PASSE}</label>
              <input type="password" onChange={handleChangeMDP} required />
            </div>
            <div className="scoped-btn">
              <div className="scoped-inner" />
              <button type="submit">
                {textes.CREER_COMPTE}
                <div className="sweet-loading">
                  <ClipLoader size={15} color={"#FFFFF"} loading={loading} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionEtablissementView;
