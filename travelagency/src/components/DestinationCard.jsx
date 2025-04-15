import React from "react";
import "../components/destinationCard.css";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DestinationCard = ({ image, name, details, rating, id }) => {
  return (
    <div className="destination-card">
  <div className="destination-card-bg">
    <img src={image} alt={name} className="destination-image" />
    
    <div className="destination-card-content">
      <div className="destination-name-wrapper">
        <h3 className="destination-name">{name}</h3>
        <Link to={`/destination/${id}`} className="arrowButton">
          <FaArrowRight className="arrow-icon" />
        </Link>
      </div>

      {/* Hidden content on hover */}
      <div className="hover-content">
        <div className="destination-bottom-head">
          <div className="destination-rating">
            <FaStar className="star-icon" />
            {rating}
          </div>
        </div>
        <div className="destination-details"><p>{details}</p></div>
      </div>
    </div>
  </div>
</div>

  );
};

export default DestinationCard;
