import React, { useState } from "react";
import MedecinCard from "./MedecinCard";
const MedecinContent = () => {
  const [nbQR, setnbQR] = useState(1);
  const onChangeNbQr = (event) => {
    event.preventDefault();
    setnbQR(event.target.value);
    console.log(nbQR);
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
            value="1"
          />
          <br />
          <br />
          <button className="btn btn-primary btn-lg">IMPRIMER</button>
        </div>
      </div>
    </div>
  );
};
export default MedecinContent;
