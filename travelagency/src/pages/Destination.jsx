
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/destination.css";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/parks" // <-- This line imports your data

const Destination = () => {
  return (
    <div>
      <Navbar />
      <div className="destination-container">
        <div className="destination-content_page">
          <h1>Destination</h1>
          <p>Explore the world with us and discover amazing places.</p>
        </div>

        <div className="explore-destinations">
          <h2>Explore All Destinations</h2> 
          <p>
            It's a well-known truth that travelers often get sidetracked by
            enticing travel <br /> packages. The allure of a great deal can
            easily capture their attention.
          </p>

          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard
              key={destination.id}
              id={destination.id} // Pass id prop here
              image={destination.image}
              name={destination.name}
              rating={destination.rating}
              details={destination.details}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Destination;


