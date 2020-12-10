import React, { useState, useContext } from "react";
import axios from "axios";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
import apiUrls from "urls/apiUrls";
import urls from "urls/urls";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from "react-router-dom";
import appContext from 'contexts/appContext';

const InscriptionMedecinView = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {setRole, error, setError} = useContext(appContext);

  const handleChangeNom = (event) => {
    event.preventDefault();
    setNom(event.target.value);
  };
  const handleChangePrenom = (event) => {
    event.preventDefault();
    setPrenom(event.target.value);
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

    const medecin = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: motDePasse,
    };
    axios
      .post(apiUrls.INSCRIPTION_MEDECIN, medecin)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setRole('medecin');
        localStorage.setItem("role",'medecin');
        history.push(urls.MEDECIN_CONNECTED);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setLoading(false);
      });
    setNom("");
    setPrenom("");
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
              <label>{textes.NOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM}
                onChange={handleChangeNom}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.PRENOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_PRENOM}
                onChange={handleChangePrenom}
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
export default InscriptionMedecinView;
