import React, { useState } from "react";
import "styles/forms.scoped.css";
import textes from "strings/connexionStrings";
import axios from "axios";
import apiUrls from "urls/apiUrls";
const ConnexionView = () => {
  const [email, setemail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
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
    const user = {
      email: email,
      password: motDePasse,
    };
    axios
      .post(apiUrls.CONNEXION_MEDECIN, user)
      .then((response) => {
        console.log("Response data :", response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log("Put in local storage", localStorage.getItem("token"));
        //TODO redirect to MEDECIN CONNECTED VIEW
      })
      .catch((error) => {
        console.warn(error);
        console.warn("try etablissement");
        axios
          .post(apiUrls.CONNEXION_ETABLISSEMENT, user)
          .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data);
            //TODO redirect to ETABLISSEMENT CONNECTED VIEW
          })
          .catch((error) => {
            console.warn(error);
            console.warn("NOT ETABLISSEMENT AND NOT MEDECIN");
          });
      });
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <form action="#">
            <div className="scoped-data">
              <label>{textes.MAIL}</label>
              <input
                type="text"
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
              <button onClick={onSubmit} type="submit">
                {textes.CONNECTER}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ConnexionView;
