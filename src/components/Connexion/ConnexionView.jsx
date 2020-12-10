import React, { useState, useContext } from "react";
import "styles/forms.scoped.css";
import textes from "strings/connexionStrings";
import axios from "axios";
import urls from "urls/urls";
import apiUrls from "urls/apiUrls";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import appContext from "contexts/appContext";

const ConnexionView = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {setRole, error, setError} = useContext(appContext);

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
    const user = {
      email: email,
      password: motDePasse,
    };
    axios
      .post(apiUrls.CONNEXION_MEDECIN, user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setRole('medecin');
        localStorage.setItem("role",'medecin');
        history.push(urls.MEDECIN_CONNECTED);
      })
      .catch(() => {
        console.warn("try etablissement");
        axios
          .post(apiUrls.CONNEXION_ETABLISSEMENT, user)
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
      });
    setEmail("");
    setMotDePasse("");
  };
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <div className="scoped-container">
          <div className="scoped-text">{textes.TITRE}</div>
          <div className="error-msg text-center">{error}</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="scoped-data">
              <label>{textes.MAIL}</label>
              <input
                type="text"
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
                {textes.CONNECTER}
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
export default ConnexionView;
