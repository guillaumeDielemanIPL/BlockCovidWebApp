import HomeView from "components/Home/HomeView";
import InscriptionEtablissementView from "components/InscriptionEtablissement/InscriptionEtablissementView";
import InscriptionMedecinView from "components/InscriptionMedecin/InscriptionMedecinView";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import URLS from "urls/urls";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={URLS.INSCRIPTION_MEDECIN}>
          <InscriptionMedecinView />
        </Route>
        <Route path={URLS.INSCRIPTION_ETABLISSEMENT}>
          <InscriptionEtablissementView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
