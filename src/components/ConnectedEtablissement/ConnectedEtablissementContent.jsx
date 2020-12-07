import React, { useEffect, useState } from "react";
import textes from "strings/etablissementStrings";
import etablissementService from "services/etablissementService";
import LieuView from "components/ConnectedEtablissement/LieuView";

const ConnectedEtablissementContent = () => {
    const [nomLieu, setNomLieu] = useState("")
    const [description, setDescription] = useState("")
    const [lieux, setLieux] = useState([])
    const [error, setError] = useState("");
    
    const initialLoad = () => {
        etablissementService
            .getAll()
            .then(response => { 
                console.log(response)
                setLieux(response)
            })
            .catch((error) => {
                console.warn(error.response.data.error);
                setError(error.response.data.error);
            });
    }

    useEffect(initialLoad,[])

    const handleNom = (event) =>{
        event.preventDefault()
        setNomLieu(event.target.value);
    }

    const handleDescription = (event) =>{
        event.preventDefault()
        setDescription(event.target.value)
    }

    const handleSubmitLieu = (event) => {
        setError("");
        event.preventDefault()
        const lieu = {
            nom: nomLieu,
            description: description
        }
        etablissementService
            .create(lieu)
            .then(newLieu => {
                setLieux(lieux.concat(newLieu))
                setNomLieu("")
                setDescription("")
            })
            .catch((error) => {
                console.warn(error.response.data.error);
                setError(error.response.data.error);
            });
    }

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
                        required
                    />
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-primary btn-lg" type="submit">{textes.CREER}</button>
                </div>
            </form>
        </div>
        <div className="container">
            <h1 className="h0">{textes.LIEUX}</h1>
                {lieux.length === 0 ? 
                    <p className="text-center">{textes.VIDE}</p>
                        : 
                    lieux.map(lieu => (
                        <LieuView key={lieu.id} texte={textes.TELECHARGER} lieu={lieu} />)
                )}
        </div>
    </div>
  );
};
export default ConnectedEtablissementContent;
