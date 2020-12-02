import React from "react";

const Card = ({ image, titre, description, handleShow }) => {
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
        <button className="btn btn-primary" onClick={handleShow}>
          S'inscrire
        </button>
        {"   "}
        ou
        <button className="btn btn-link">Se connecter</button>
      </div>
    </div>
  );
};
export default Card;
