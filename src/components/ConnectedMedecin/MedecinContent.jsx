import React, { useState, useContext } from "react";
import MedecinCard from "components/ConnectedMedecin/MedecinCard";
import { create } from "services/medecinService";
import { useHistory } from "react-router-dom";
import URLS from "urls/urls";
import appContext from "contexts/appContext";

const MedecinContent = () => {
  const history = useHistory();
  const [nbQR, setnbQR] = useState(1);
  const {error, setError} = useContext(appContext);

  const onChangeNbQr = (event) => {
    event.preventDefault();
    setnbQR(event.target.value);
  };

  const onPrint = (event) => {
    event.preventDefault();
    setError('');
    if(nbQR < 1){
      setError('Le nombre de QR codes ne peut être inférieur à 1');
    } else {
      create(nbQR)
        .then((response) => {
          console.log(response);
          localStorage.setItem("qrs", JSON.stringify(response));
          history.push(URLS.MULTIPLE_QRGENERATOR);
        })
        .catch((error) => {
          setError(error.response.data.error);
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <MedecinCard />
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <br />
          <div className="has-error help-block text-center">{error}</div>
          <br />
          <input
            type="number"
            className="btn btn-info btn-lg"
            onChange={onChangeNbQr}
            placeholder="Entrez un nombre"
          />
          <br />
          <br />
          <button className="btn btn-primary btn-lg" onClick={onPrint}>
            IMPRIMER
          </button>
        </div>
      </div>
    </div>
  );
};
export default MedecinContent;
