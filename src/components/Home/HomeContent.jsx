import React, { useState } from "react";
import Card from "components/Home/Card";
import imageMedecin from "assets/myimages/medecin.png";
import imageEtablissement from "assets/myimages/etablissement.png";
import textes from "strings/homeStrings";
import ConnexionModal from "./ConnexionModal";
const HomeContent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <ConnexionModal show={show} handleClose={handleClose} />
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Card
            image={imageMedecin}
            description={textes.MEDECIN_DESCRIPTION}
            titre={textes.MEDECIN_TITRE}
            handleShow={handleShow}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Card
            image={imageEtablissement}
            description={textes.ETABLISSEMENT_DESCRIPTION}
            titre={textes.ETABLISSEMENT_TITRE}
            handleShow={handleShow}
          />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
