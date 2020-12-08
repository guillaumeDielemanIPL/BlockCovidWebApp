import React, { useState } from "react";
import axios from "axios";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
import apiUrls from "urls/apiUrls";
import urls from "urls/urls";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from "react-router-dom";

const InscriptionMedecinView = () => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onChangeNom = (event) => {
    event.preventDefault();
    setnom(event.target.value);
  };
  const onChangePrenom = (event) => {
    event.preventDefault();
    setprenom(event.target.value);
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
    setLoading(true);
    setError("");

    const medecin = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: motDePasse,
    };
    console.log(medecin);
    axios
      .post(apiUrls.INSCRIPTION_MEDECIN, medecin)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        history.push(urls.MEDECIN_CONNECTED);
      })
      .catch((error) => {
        console.warn(error.response.data.error);
        setError(error.response.data.error);
        setLoading(false);
      });
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <div className="has-error help-block text-center">{error}</div>
          <form>
            <div className="scoped-data">
              <label>{textes.NOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_NOM}
                onChange={onChangeNom}
                required
              />
            </div>
            <div className="scoped-data">
              <label>{textes.PRENOM}</label>
              <input
                type="text"
                placeholder={textes.PLACEHOLDER_PRENOM}
                onChange={onChangePrenom}
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
              <button onClick={onSubmit}>
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
