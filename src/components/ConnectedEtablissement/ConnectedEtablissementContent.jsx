import React, { useEffect, useState, useContext } from "react";
import textes from "strings/etablissementStrings";
import { create, getAll } from "services/etablissementService";
import LieuView from "components/ConnectedEtablissement/LieuView";
import appContext from 'contexts/appContext';

const ConnectedEtablissementContent = () => {
  const [nomLieu, setNomLieu] = useState("");
  const [description, setDescription] = useState("");
  const [lieux, setLieux] = useState([]);
  const {error, setError} = useContext(appContext);

  const initialLoad = () => {
    setError("");
    getAll()
      .then((response) => {
        setLieux(response);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  useEffect(initialLoad, [setError]);

  const handleNom = (event) => {
    event.preventDefault();
    setNomLieu(event.target.value);
  };

  const handleDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleSubmitLieu = (event) => {
    setError("");
    event.preventDefault();
    const lieu = {
      nom: nomLieu,
      description: description,
    };
    create(lieu)
      .then((newLieu) => {
        setLieux(lieux.concat(newLieu));
        setNomLieu("");
        setDescription("");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <div className="container">
        <h1 className="h0">{textes.TITRE}</h1>
        <div className="has-error help-block text-center">{error}</div>
        <form onSubmit={handleSubmitLieu}>
          <div className="col-sm-3 col-xs-offset-2">
            <label className="label-block">{textes.NOM_LIEU}</label>
            <input
              className="table-bordered"
              type="text"
              placeholder={textes.PLACEHOLDER_NOM_LIEU}
              onChange={handleNom}
              value={nomLieu}
              required
            />
          </div>
          <div className="col-sm-3 list-inline">
            <label className="label-block">{textes.DESCRIPTION}</label>
            <input
              className="table-bordered"
              type="text"
              placeholder={textes.PLACEHOLDER_DESCRIPTION}
              onChange={handleDescription}
              value={description}
              required
            />
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary btn-lg" type="submit">
              {textes.CREER}
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h1 className="h0">{textes.LIEUX}</h1>
        {lieux.length === 0 ? (
          <p className="text-center">{textes.VIDE}</p>
        ) : (
          lieux.map((lieu) => (
            <LieuView key={lieu.id} lieu={lieu} />
          ))
        )}
      </div>
    </div>
  );
};
export default ConnectedEtablissementContent;
