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
  const [email, setemail] = useState("");
  const [motDePasse, setmotDePasse] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {setStatus, error, setError} = useContext(appContext);

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
    const user = {
      email: email,
      password: motDePasse,
    };
    axios
      .post(apiUrls.CONNEXION_MEDECIN, user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setStatus('medecin');
        localStorage.setItem("status",'medecin');
        history.push(urls.MEDECIN_CONNECTED);
      })
      .catch(() => {
        console.warn("try etablissement");
        axios
          .post(apiUrls.CONNEXION_ETABLISSEMENT, user)
          .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            setStatus('etablissement');
            localStorage.setItem("status",'etablissement');
            history.push(urls.ETABLISSEMENT_CONNECTED);
          })
          .catch((error) => {
            //NOT ETABLISSEMENT AND NOT MEDECIN
            console.warn(error.response.data.error);
            setError(error.response.data.error);
            setLoading(false);
          });
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
