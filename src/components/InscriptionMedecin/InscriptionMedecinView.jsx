import React, { useState } from "react";
import axios from "axios";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
const InscriptionMedecinView = () => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
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
    const medecin = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: motDePasse,
    };
    console.log(medecin);
    axios
      .post(
        "https://blockcovid-pfe.azurewebsites.net/api/auth/register/medecin",
        medecin
      )
      .then((response) => {
        console.log(response);
        //TODO manage what to do after depends of response...
      });
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
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
              <button onClick={onSubmit}>{textes.CREER_COMPTE}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionMedecinView;
