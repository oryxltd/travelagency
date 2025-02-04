import React from "react";
// import DestinationCard from "../components/DestinationCard";
import Navbar from "../components/Navbar";
import "../pages/destination.css";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1672762542894-caaa8d4f0a77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 1",
    rating: 3,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1638135644120-5f024c0dcae7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 2",
    rating: 2.5,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 3",
    rating: 4,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 4",
    rating: 1,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 5",
    rating: 5,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 6",
    rating: 4.5,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  { 
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 7",
    rating: 3.5,
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 8",
    rating: '4.5',
    details: "A watefall is a stuning cascade of water flowing over a cliff , ceating a mesmerizing natural spectacle.",
  },
];

const Destination = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="destination-container">
        <div className="destination-content_page">
          <h1>Destination</h1>
          <p>Explore the world with us and discover amazing places.</p>
        </div>
        {/* Explore All Destinations Section */}
        <div className="explore-destinations">
          <h2>Explore All Destinations</h2>
          <p>its a well-known truth that travelers often get sidetracked by enticing travel <br /> packages. The allure of a great deal can easily capture their attention.</p>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard image={destination.image} name={destination.name} rating={destination.rating} details={destination.details}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

