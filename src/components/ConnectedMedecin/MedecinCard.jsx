import React from "react";
import textes from "strings/medecinStrings";
const MedecinCard = () => {
  return (
    <div className="card ">
      <div className="card-body">
        <p className="card-text">{textes.DESCRIPTION}</p>
      </div>
    </div>
  );
};
export default MedecinCard;
