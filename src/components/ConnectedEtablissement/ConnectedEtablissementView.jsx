import React from "react";
import ConnectedEtablissementContent from "components/ConnectedEtablissement/ConnectedEtablissementContent"
import HeaderLogged from "components/Headers/HeaderLogged";
import Footer from "components/SharedComponents/Footer";

const ConnectedEtablissementView = () => {
  return (
    <div>
        <HeaderLogged/>
        <ConnectedEtablissementContent/>
        <Footer/>
    </div>
  );
};
export default ConnectedEtablissementView;
