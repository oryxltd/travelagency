import React from "react";
import Navbar from "../components/Navbar";
import "../pages/home.css";
import tempImg from "../assets/images/tempImg.jpg";
import Button from "../components/Button";
import DestinationSlider from "../components/DestinationSlider";
// import PackageCard from "../components/PackageCard";
import PackageSlider from "../components/PackageSlider";
import WhyChooseUs from "../components/WhyChooseUs";

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
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 3",
    price: "$3000",
    details: "Details about destination 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 3",
    price: "$3000",
    details: "Details about destination 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    name: "Destination 3",
    price: "$3000",
    details: "Details about destination 3",
  },
];

//  // image, DistrictName, MainLocationName, DurationinDays, StartDate
const packages = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1672762542894-caaa8d4f0a77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 5",
      MainLocationName: "Destination 1",

      DurationinDays: "$4",
      StartDate: "2022-08-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1638135644120-5f024c0dcae7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 6",
      MainLocationName: "Destination 2",

      DurationinDays: "3",
      StartDate: "2022-08-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 1",
      MainLocationName: "Destination 3",

      DurationinDays: "4",
      StartDate: "2022-08-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 2",
      MainLocationName: "Destination 4",

      DurationinDays: "2",
      StartDate: "2022-08-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 3",
      MainLocationName: "Destination 5",

      DurationinDays: "4",
      StartDate: "2022-08-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735668219806-7ee1de68b969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
      DistrictName: "Destination 4",
      MainLocationName: "Destination 6",

      DurationinDays: "5",
      StartDate: "2022-08-15",
  },
];

function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage-content">
        <div className="hero-content">
          <div className="heroContent-typo">
            <h5 className="subheading">Explore with Us</h5>
            <h1>
              "Discover your Next <br /> Adventure with us"
            </h1>
            <p>
              Embark on an unforgettable journey with our Tour package, <br />
              offering a seamless blend of Adventure and cultural immersion
              across the india's most iconic Destinations
            </p>
            <div className="heroContent-btn">
              <button className="book-btn">
                <a href="/contact">Book Now</a>
              </button>
              <button className="learn-btn">
                <a href="/contact">Learn More</a>
              </button>
            </div>
          </div>

          <div className="heroContent-img">
            <img src={tempImg} alt="homeImage" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-imagePart ">
            <img src={tempImg} alt="" />
          </div>
          <div className="about-typoPart">
            <h4 className="subheading ">About Us</h4>
            <h1 className=".second-heading about-mainheading">
              The Story Behind Our Journeys
            </h1>
            <p className="paragraph">
              Welcome to JK Tours, where we belive that every journey should be
              as unique as the traveler. Whether you're seeking the thrill of
              adeventure , a peaceful retreat, or a deep dive into new culture,
              we are here to guide you every step of the way
            </p>
            <div className="about-typoLine">
              <div className="typo-infoBtn">
                <img src="" alt="icon" />
                <p>Great Travel experience</p>
              </div>
              <div className="typo-infoBtn">
                <img src="" alt="icon" />
                <p>Competitive pricing offers</p>
              </div>
            </div>

            <div className="about_typo-readbtn">
              <Button text={"Read More"} type="edge" href="/about" />
            </div>
          </div>
        </div>

        <div className="destination-content">
          <h5 className="destination-heading">Top Destination</h5>
          <p className="destination-description">
            Explore our handpicked top destination, where unforgettable <br />
            adventures and breathtaking experience awaits you
          </p>
          <div className="destination-slider-container">
          <DestinationSlider
            destinations={destinations} 
          />
          </div>
          
          <h5 className="destination-heading">Packages</h5>
          <p className="destination-description">
            Discover the World iconic destination with our exeoptional packages <br />
            offering unparallel experience , personlised iternerraies and
            unforgettable memories
          </p>

          <div className="package-cards-container">
            <PackageSlider packages={packages} />
          </div>
        </div>

        <div className="features-content">
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
}

export default Home;

/*
   hero section 
    main div -> 2 div 

    1st div -> sub-head , heading , para , div -> 2 button

   about section

   destination section

   key features section
*/
