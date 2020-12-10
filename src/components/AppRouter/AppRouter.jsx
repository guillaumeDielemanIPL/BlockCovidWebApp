import HomeView from "components/Home/HomeView";
import InscriptionEtablissementView from "components/InscriptionEtablissement/InscriptionEtablissementView";
import InscriptionMedecinView from "components/InscriptionMedecin/InscriptionMedecinView";
import InscriptionChoiceView from "components/InscriptionChoice/InscriptionChoiceView";
import ConnexionView from "components/Connexion/ConnexionView";
import React, { useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import URLS from "urls/urls";
import ConnectedEtablissementView from "components/ConnectedEtablissement/ConnectedEtablissementView";
import ConnectedMedecinView from "components/ConnectedMedecin/ConnectedMedecinView";
import MultipleQRGenerator from "components/QRCodeGenerator/MultipleQRGenerator";
import appContext from "contexts/appContext";

const AppRouter = () => {
  const {status} = useContext(appContext);
  return (
    <Router>
      <Switch>
        <Route path={URLS.MULTIPLE_QRGENERATOR}>
          {!status ? 
                    <Redirect to={URLS.ACCUEIL} /> : 
                    status === 'medecin' ? 
                      <MultipleQRGenerator /> : 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.MEDECIN_CONNECTED}>
          {!status ? 
                    <Redirect to={URLS.ACCUEIL} /> : 
                    status === 'medecin' ? 
                      <ConnectedMedecinView /> : 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.INSCRIPTION_MEDECIN}>
          {!status ? 
                    <InscriptionMedecinView /> : 
                    status === 'medecin' ? 
                      <Redirect to={URLS.MEDECIN_CONNECTED} />: 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.INSCRIPTION_ETABLISSEMENT}>
          {!status ? 
                    <InscriptionEtablissementView /> : 
                    status === 'medecin' ? 
                      <Redirect to={URLS.MEDECIN_CONNECTED} />: 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.INSCRIPTION}>
          {!status ? 
                    <InscriptionChoiceView /> : 
                    status === 'medecin' ? 
                      <Redirect to={URLS.MEDECIN_CONNECTED} />: 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.CONNEXION}>
          {!status ? 
                    <ConnexionView /> : 
                    status === 'medecin' ? 
                      <Redirect to={URLS.MEDECIN_CONNECTED} />: 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
        <Route path={URLS.ETABLISSEMENT_CONNECTED}>
          {!status ? 
                    <Redirect to={URLS.ACCUEIL} /> : 
                    status === 'medecin' ? 
                        <Redirect to={URLS.MEDECIN_CONNECTED}/> :
                        <ConnectedEtablissementView />}
        </Route>
        <Route path={URLS.ACCUEIL}>
        {!status ? 
                  <HomeView /> : 
                  status === 'medecin' ? 
                      <Redirect to={URLS.MEDECIN_CONNECTED}/> : 
                      <Redirect to={URLS.ETABLISSEMENT_CONNECTED} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
