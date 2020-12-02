import React from "react";

const Card = ({ image, titre, description }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        height="180"
        width="286"
        src={image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{titre}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Card;
