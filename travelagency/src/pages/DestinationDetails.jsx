import { useParams } from "react-router-dom";
import destinations from "../data/parks";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KanhaSp from "../subpages/KanhaSp";
import BadhavgharSp from "../subpages/BadhavgharSp";
import PenchSp from "../subpages/PenchSp";
import PannaSp from "../subpages/PannaSp";

import "../pages/destinationDetails.css";

const DestinationDetail = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const destination = destinations.find((p) => p.id === parseInt(id)); // Convert string id to number

  if (!destination) return <div className="text-center py-20">Destination Not Found</div>;

  let customContent;

  if (destination.id === 1) {
    customContent = (
      <div className="kanha-special">
         <KanhaSp />
      </div>
    );
  } else if (destination.id === 2) {
    customContent = (
      <div className="pench-special">
          <BadhavgharSp />
      </div>
    );
  } else if (destination.id === 3) {
    customContent = (
      <div className="pench-special">
          <PenchSp />
      </div>
    );
  } else if (destination.id === 4) {
    customContent = (
      <div className="pench-special">
          <PannaSp />
      </div> 
    );
  } 


  return ( 
    <>
      <Navbar />
      <div className="destination-detail-container">
        <div className="destination-detail-header">
          <img
            src={destination.image}
            alt={destination.name}
            className="destination-image"
          />
          <h1>{destination.name}</h1>
        </div>
        <p className="destination-description">{destination.description}</p>
        <div>{customContent}</div>
      </div>
      <Footer />
    </>
  );
};

export default DestinationDetail;
