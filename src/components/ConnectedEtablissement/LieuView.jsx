import React from "react";
import { useHistory } from "react-router-dom";
import URLS from "urls/urls";

const LieuView = ({ lieu }) => {
  const history = useHistory();
  const redirectToQrGenerator = () => {
    localStorage.setItem("qr", lieu.qrCode);
    history.push(URLS.SINGLE_QRGENERATOR);
  };
  return (
    <table className="table-bordered col-xs-offset-2 table-container">
      <tbody>
        <tr>
          <td>
            <p>{lieu.nom}</p>
            <p>{lieu.description}</p>
          </td>
          <td className="table-bordered table-container">
            <button
              onClick={redirectToQrGenerator}
              className="btn btn-primary btn-lg"
              type="button"
            >
              Télécharger
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default LieuView;
