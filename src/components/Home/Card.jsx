import React from "react";
import { Link } from "react-router-dom";
import textes from "strings/accueilStrings";
import URLS from "urls/urls";

const Card = ({ image, titre, description, urlInscription }) => {
  return (
    <div className="card ">
      <img
        className="card-img-top"
        height="180"
        width="286"
        src={image}
        alt="representation du user"
      />
      <div className="card-body">
        <h5 className="card-title">{titre}</h5>
        <p className="card-text">{description}</p>
        <Link className="btn btn-primary" to={urlInscription}>
          {textes.INSCRIRE}
        </Link>
        {"   "}
        ou
        <Link className="btn btn-link" to={URLS.CONNEXION}>
          {textes.CONNECTER}
        </Link>
      </div>
    </div>
  );
};
export default Card;
