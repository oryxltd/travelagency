import React from "react";
// import { Link } from "react-router-dom";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import "../components/packagecards.css";
import "../components/navbar.css"; 

const PackageCard = ({
  image,
  DistrictName, 
  MainLocationName,
  DurationinDays,
  StartDate,
  id,
}) => {
  return (
    <div className="package-card">
        <div className="package-image-container">
          <img src={image} alt="Badhavghar" />
        </div>
        <div className="details">
          <div className="location">
            <MdLocationOn className="location-icon" color="orange" /><h5>{DistrictName}</h5>
          </div>
          <div className="main-location"> <h3>{MainLocationName}</h3></div>
          <div className="duration">
            <MdAccessTime className="watch-icon" color="orange" />
            {DurationinDays} Days
          </div>
          <div className="start">Start: {StartDate}</div>
          <hr />
        </div>
    </div>
  );
};

export default PackageCard;
