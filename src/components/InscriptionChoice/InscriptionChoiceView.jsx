import React, { useState } from "react";
import "styles/forms.scoped.css";
import textes from "strings/inscriptionStrings";
import URLS from "urls/urls";
import { useHistory } from "react-router-dom"

const InscriptionChoiceView = () => {
    const history = useHistory()
    const [choix, setChoix] = useState("")

    const handleChange = (e) => setChoix(e.target.value)
    
    const handleChoice = (e) => {
        e.preventDefault()
        history.push(choix)
    }
    
  return (
    <div className="scoped-background-colored">
      <div className="scoped-center">
        <form action="#" onSubmit={handleChoice}>
            <div className="scoped-container">
                <div className="scoped-text">
                    <p>{textes.TITRE}</p>
                    <label className="radio-inline input">
                        <input 
                            type="radio" 
                            name="choix" 
                            id="etablissement" 
                            value={URLS.INSCRIPTION_ETABLISSEMENT}
                            onChange={handleChange} 
                        />
                        {textes.ETABLISSEMENT_RADIO}
                    </label>
                    <label className="radio-inline input">
                        <input 
                            type="radio" 
                            name="choix" 
                            id="medecin" 
                            value={URLS.INSCRIPTION_MEDECIN}
                            onChange={handleChange}
                        />
                        {textes.MEDECIN_RADIO}
                    </label>
                    <div className="scoped-btn">
                        <div className="scoped-inner" />
                        <button type="submit">{textes.VALIDER}</button>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};
export default InscriptionChoiceView;
