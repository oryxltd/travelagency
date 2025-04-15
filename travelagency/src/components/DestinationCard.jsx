import React from "react";
import "../components/destinationCard.css";
import { FaStar, FaArrowRight } from "react-icons/fa";

const DestinationCard = ({ image, name, details, rating }) => {
  return (
    
    <div className="destination-card">
      <div className="destination-card-top">
        <img src={image} alt={name} className="destination-image" />
      </div>
      <div className="destination-card-bottom"> 
        <div className="destination-bottom-head">
          <h3 className="destination-name">{name}</h3>
          <div className="destination-rating">
            <FaStar className="star-icon" />
            {rating}
          </div>
        </div>
        <div className="destination-details">{details}</div>
        <button className="arrowButton">
          <FaArrowRight className="arrow-icon" />  
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
