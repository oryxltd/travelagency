import React, { useState, useEffect } from "react";
import '../components/destinationSlider.css';
import DestinationCard from "./DestinationCard";

const DestinationSlider = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [destinations]);

  const getVisibleCards = () => {
    return [
      destinations[currentIndex],
      destinations[(currentIndex + 1) % destinations.length],
      destinations[(currentIndex + 2) % destinations.length],
      destinations[(currentIndex + 3) % destinations.length],

    ]; 
  }; 

  return (
    <div className="slider-container">
      <div className="slider-track" >
        {getVisibleCards().map((destinations, index) => (
            <DestinationCard 
                key={index}
                image={destinations.image} 
                name={destinations.name}
                details={destinations.details} 
                rating={destinations.rating}
            />
        ))}
      </div>
    </div>
  ); 
};

export default DestinationSlider;
