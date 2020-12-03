import React from "react";
import { Link } from "react-router-dom";
import textes from "strings/accueilStrings";
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
        <button className="btn btn-link">{textes.CONNECTER}</button>
      </div>
    </div>
  );
};
export default Card;
