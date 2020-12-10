import React from "react";
import SingleQRGenerator from "components/QRCodeGenerator/SingleQRGenerator";

const LieuView = ({ lieu }) => {
  return (
    <table className="table-bordered col-xs-offset-2 table-container">
      <tbody>
        <tr>
          <td>
            <p>{lieu.nom}</p>
            <p>{lieu.description}</p>
          </td>
          <td className="table-bordered table-container">
            <SingleQRGenerator lieu={lieu}/>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default LieuView;
