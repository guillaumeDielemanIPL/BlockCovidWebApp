import React, { useState, useContext } from "react";
import MedecinCard from "components/ConnectedMedecin/MedecinCard";
import { create } from "services/medecinService";
import { useHistory } from "react-router-dom";
import URLS from "urls/urls";
import appContext from "contexts/appContext";

const MedecinContent = () => {
  const history = useHistory();
  const [nbQR, setNbQR] = useState(1);
  const {error, setError} = useContext(appContext);
  localStorage.removeItem("qrs");
  
  const handleChangeNbQr = (event) => {
    event.preventDefault();
    setError("");
    const newNbQr = event.target.value;
    if(String(newNbQr) === '' || newNbQr > 0){
      setNbQR(newNbQr);
    }
    else if(newNbQr < 1){
      setNbQR(1);
      setError("Le nombre de QR codes ne peut être inférieur à 1 !");
    }
  };

  const handlePrint = (event) => {
    event.preventDefault();
    setError("");
    if(nbQR < 1){
      setError("Le nombre de QR codes ne peut être inférieur à 1 !");
    } else {
      create(nbQR)
        .then((response) => {
          localStorage.setItem("qrs", JSON.stringify(response));
          history.push(URLS.MULTIPLE_QRGENERATOR);
        })
        .catch((error) => {
          setError(error.response.data.error);
        });
    }
  };
  return (
    <div className="container large-medecin">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <MedecinCard />
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <br />
          <div className="error-msg text-center">{error}</div>
          <br />
          <input
            type="number"
            className="btn btn-info btn-lg"
            onChange={handleChangeNbQr}
            placeholder="Entrez un nombre"
            value={nbQR}
          />
          <br />
          <br />
          <button className="btn btn-primary btn-lg" onClick={handlePrint}>
            IMPRIMER
          </button>
        </div>
      </div>
    </div>
  );
};
export default MedecinContent;
