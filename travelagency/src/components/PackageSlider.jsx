import React, { useState, useEffect } from "react";
import '../components/packageSlider.css'; // Import CSS for package slider
// import PackageCard from "./PackageCard"; // Import your PackageCard component
import PackageCard from "./PackageCard";

const PackageSlider = ({ packages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [packages]);

  const getVisiblePackages = () => {
    return [
      packages[currentIndex],
      packages[(currentIndex + 1) % packages.length],
      packages[(currentIndex + 2) % packages.length],
      packages[(currentIndex + 3) % packages.length],
    ];
  };

  return (
    <div className="package-slider-container">
      <div className="package-slider-track">
        {getVisiblePackages().map((packageData, index) => (
          <PackageCard
            key={index}
            image={packageData.image} 
            DistrictName={packageData.DistrictName}
            MainLocationName={packageData.MainLocationName}
            DurationinDays={packageData.DurationinDays}
            StartDate={packageData.StartDate}
                // image, DistrictName, MainLocationName, DurationinDays, StartDate
          />
        ))}
      </div>
    </div>
  );
};

export default PackageSlider;