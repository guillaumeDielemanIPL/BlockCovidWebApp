import React, { useState } from "react";
import MedecinCard from "components/ConnectedMedecin/MedecinCard";
import { create } from "services/medecinService";
import { useHistory } from "react-router-dom";
import URLS from "urls/urls";
const MedecinContent = () => {
  const history = useHistory();
  const [nbQR, setnbQR] = useState(1);
  const onChangeNbQr = (event) => {
    event.preventDefault();
    setnbQR(event.target.value);
  };

  const onPrint = (event) => {
    event.preventDefault();
    console.log("The number of QR code to print is :", nbQR);
    create(nbQR)
      .then((response) => {
        console.log(response);
        localStorage.setItem("qrs", JSON.stringify(response));
        history.push(URLS.MULTIPLE_QRGENERATOR);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <MedecinCard />
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <br />
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
