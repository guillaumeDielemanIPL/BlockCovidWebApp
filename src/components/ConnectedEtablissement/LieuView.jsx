import React from "react";

const LieuView = ({texte, lieu}) => {
  return (
    <div>
        <td>
            <p>{lieu.nom}</p>
            <p>{lieu.description}</p>
        </td>
        <td className="table-bordered table-container">
            <button className="btn btn-primary btn-lg" type="button">{texte}</button>
        </td>
    </div>
  );
};
export default LieuView;
