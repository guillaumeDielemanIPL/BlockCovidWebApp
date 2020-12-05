import HomeView from "components/Home/HomeView";
import InscriptionEtablissementView from "components/InscriptionEtablissement/InscriptionEtablissementView";
import InscriptionMedecinView from "components/InscriptionMedecin/InscriptionMedecinView";
import InscriptionChoiceView from "components/InscriptionChoice/InscriptionChoiceView";
import ConnexionView from "components/Connexion/ConnexionView";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import URLS from "urls/urls";
import AjoutLieuView from "components/AjoutLieu/AjoutLieuView";
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
        <Route path={URLS.INSCRIPTION}>
          <InscriptionChoiceView />
        </Route>
        <Route path={URLS.CONNEXION}>
          <ConnexionView />
        </Route>
        <Route path={URLS.AJOUTLIEU}>
          <AjoutLieuView />
        </Route>
        <Route path={URLS.ACCUEIL}>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
