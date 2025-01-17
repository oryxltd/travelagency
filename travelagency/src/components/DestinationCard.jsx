import React from "react";
import "../components/destinationCard.css";

const DestinationCard = ({ image, name, price, details }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <div className="destination-overlay">
        <h3 className="destination-name">{name}</h3>
        <div className="destination-data">
          <p className="destination-price">{price}</p>
          <p className="destination-details">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
