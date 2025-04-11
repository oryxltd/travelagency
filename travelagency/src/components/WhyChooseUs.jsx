import React from 'react';

// import tempImg from './tempImg.jpg'; // Import the image
import tempImg from '../assets/images/tempImg.jpg';
import '../components/whyChooseUs.css'; // Import the CSS file
import { MdPeople, MdHome, MdKeyboardArrowRight, MdSupportAgent } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container"> 
        <div className="text-content">
          <h2>Why Choose Us</h2>
          <p>Choose us for your travel needs because we offer personalized itineraries, unbeatable deals, and 24/7 customer support, ensuring a seamless and unforgettable journey every time.</p>
 
          <ul className="features">
            <li> <span><MdPeople size={22} /> </span>Every place and activity is thoughtfully selected by our team.</li>
            <li> <span><FaDollarSign size={22} /></span>   We are provide different type of tour plan.</li>

            <li> <span> <MdHome size={22} /></span>  Easy to booking system.</li>
            <li> <span> <MdKeyboardArrowRight size={22} /></span>  Payment return policy.</li>
            <li> <span><MdSupportAgent size={22} /></span> Trusted by more that 50,000 user.</li>
          </ul>

          <button className="btn">Find Out More</button>
        </div>
        <div className="image-container">
          <img src={tempImg} alt="Why Choose Us" />
        </div>
      </div> 
    </section>
  );
};

export default WhyChooseUs;