import React from "react";
import HeaderLogged from "components/Headers/HeaderLogged";
import Footer from "components/SharedComponents/Footer";
import MedecinContent from "components/ConnectedMedecin/MedecinContent";
const ConnectedMedecinView = () => {
  return (
    <div>
      <HeaderLogged />
      <MedecinContent />
      <Footer />
    </div>
  );
};
export default ConnectedMedecinView;
