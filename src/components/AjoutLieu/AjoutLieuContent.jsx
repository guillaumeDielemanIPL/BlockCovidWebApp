import React from "react";
import "styles/ajoutLieu.css";
import textes from "strings/ajoutLieuStrings";

const AjoutLieuView = () => {
  return (
    <div>
        <div className="wrapper">
        <h1>{textes.TITRE}</h1>
            <form action="#">
                <div className="nomLieu">
                    <label>{textes.NOM_LIEU}</label>
                    <input
                        type="text"
                        placeholder={textes.PLACEHOLDER_NOM_LIEU}
                        required
                    />
                </div>
                <div className="description">
                    <label>{textes.DESCRIPTION}</label>
                    <input
                        type="text"
                        placeholder={textes.PLACEHOLDER_DESCRIPTION}
                        required
                    />
                </div>
                <button type="submit">{textes.CREER}</button>
            </form>
        </div>
        <div className="wrapper">
            <h1>{textes.LIEUX}</h1>
            <table>
                <tr>
                    <td><p>Table 1</p><p>Table à côté du bar </p>
                        
                    </td>
                    <td><button type="button">{textes.TELECHARGER}</button></td>
                </tr>
            </table>
        </div>
    </div>
  );
};
export default AjoutLieuView;
