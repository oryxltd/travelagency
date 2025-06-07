import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../pages/home.css";
import panna2 from "../assets/images/panna2.jpg";
import Button from "../components/Button";
import DestinationSlider from "../components/DestinationSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import { FaGlobeAmericas, FaTags, FaPlane } from "react-icons/fa";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
 
import destinations from "../data/parks";


// const destinations = [
//   {
//     image: kanha,
//     name: "Kanha Park",
//   },
//   {
//     image: badhavghar,
//     name: "Badhavghar National Park",
//   },
//   {
//     image: pench,
//     name: "Pench Park",
//   },
//   {
//     image: panna,
//     name: "Panna Park",
//   },
// ];

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
              <Link to="/inquiry" className="book-btn">
                <button>Book Now</button>
              </Link>
              <button className="learn-btn">
                <a href="/contact">Learn More</a>
              </button>
            </div>
          </div>
        </div>
        {/* hero featuers */}
        <div className="hero-features">
          <div className="hero-feature_card hero-feature_card1">
            <div className="hero-feature_icon">
              <FaPlane className="feature-icon" />
            </div>
            <h4 className="feature-card_heading">Best Deals</h4>
            <p className="feature-card_description">
              We provide different types of tour plans.
            </p>
          </div>
          <div className="hero-feature_card hero-feature_card2">
            <div className="hero-feature_icon">
              <FaPlane className="feature-icon" />
            </div>
            <h4 className="feature-card_heading">Best Deals</h4>
            <p className="feature-card_description">
              We provide different types of tour plans.
            </p>
          </div>
          <div className="hero-feature_card hero-feature_card3">
            <div className="hero-feature_icon">
              <FaPlane className="feature-icon" />
            </div>
            <h4 className="feature-card_heading">Best Deals</h4>
            <p className="feature-card_description">
              We provide different types of tour plans.
            </p>
          </div>
        </div>
        {/* about content */}
        <div className="about-content">
          <div className="about-imagePart">
            <img src={panna2} alt="" />
          </div>
          <div className="about-typoPart">
            <h4 className="subheading">About Us</h4>
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
                <FaGlobeAmericas className="typo-inforBtn-logo" />
                <p>Great Travel experience</p>
              </div>
              <div className="typo-infoBtn">
                <FaTags className="typo-inforBtn-logo" />
                <p>Competitive pricing offers</p>
              </div>
            </div>

            <div className="about_typo-readbtn">
              <Button text={"Read More"} type="edge" href="/about" />
            </div>
          </div>
        </div>

        <div className="home_destination-content">
          <h5 className="home_destination-heading">Top Destination</h5>
          <p className="home_destination-description">
            Explore our handpicked top destination, where unforgettable <br />
            adventures and breathtaking experience awaits you
          </p>
          <div className="destination-slider-container">
            <DestinationSlider destinations={destinations} />
          </div>

          <h5 className="home_destination-heading">Image Gallery</h5>
          <p className="home_destination-description">
            Discover the World iconic destination with our exeoptional packages{" "}
            <br />
            offering unparallel experience , personlised iternerraies and
            unforgettable memories
          </p>

          <div class="GalleryGrid-container">
            <div class="item item-1">
              <img src={g1} alt="national park" />
            </div>
            <div class="item item-2">
              <img src={g2} alt="national park" />
            </div>
            <div class="item item-3">
              <img src={g3} alt="national park" />
            </div>
            <div class="item item-4">
              <img src={g4} alt="national park" />
            </div>
            <div class="item item-5">
              <img src={g5} alt="national park" />
            </div>
            
          </div>
        </div>

        <div className="features-banner">
          <div className="overlay"></div>
          <div className="content">
            <h2>Explore the World with Us</h2>
            <p>
              Discover new destinations, plan your perfect trip, and make
              memories that last a lifetime.
            </p>
            <button className="features-btn">
              {" "}
              <a href="/contact">Learn More</a> 
            </button>
          </div>
        </div>
        <div className="features-content">
          <WhyChooseUs />
        </div> 
        <Footer />
      </div>
    </div>
  );
}

export default Home;