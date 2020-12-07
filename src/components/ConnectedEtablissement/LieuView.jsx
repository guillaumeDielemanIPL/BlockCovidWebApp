import React from "react";

const LieuView = ({texte, lieu}) => {
  return (
    <table className="table-bordered col-xs-offset-2 table-container">
      <tbody>
        <tr>
          <td>
              <p>{lieu.nom}</p>
              <p>{lieu.description}</p>
          </td>
          <td className="table-bordered table-container">
              <button className="btn btn-primary btn-lg" type="button">{texte}</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default LieuView;
