import React from "react";
import Card from "components/Home/Card";
import imageMedecin from "assets/myimages/medecin.png";
import imageEtablissement from "assets/myimages/etablissement.png";
import textes from "strings/accueilStrings";
import URLS from "urls/urls";
const HomeContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Card
            image={imageMedecin}
            description={textes.MEDECIN_DESCRIPTION}
            titre={textes.MEDECIN_TITRE}
            urlInscription={URLS.INSCRIPTION_MEDECIN}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Card
            image={imageEtablissement}
            description={textes.ETABLISSEMENT_DESCRIPTION}
            titre={textes.ETABLISSEMENT_TITRE}
            urlInscription={URLS.INSCRIPTION_ETABLISSEMENT}
          />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
