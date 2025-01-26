// Devansh is working on this file

import React from "react";
// import Navbar from '../components/Navbar';
import DestinationCard from "../components/DestinationCard";
import Navbar from "../components/Navbar";

// destination card testing data
const destinations = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1672762542894-caaa8d4f0a77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 1",
    price: "$1000",
    details: "Details about destination 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1638135644120-5f024c0dcae7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 2",
    price: "$2000",
    details: "Details about destination 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 3",
    price: "$3000",
    details: "Details about destination 3",
  },
];

const Destination = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          gap: ".5em",
          padding: "10px",
          alignItems: "center",
        }}
      >
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            name={destination.name}
            price={destination.price}
            details={destination.details}
          />
        ))}

        {/* destination card testing start */}
      </div>
    </div>
  );
};

export default Destination;
