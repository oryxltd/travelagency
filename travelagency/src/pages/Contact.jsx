import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/contact.css"; // Import your CSS file
import tempImg from "../assets/images/tempImg.jpg";
import {
  FaPlus,
  FaMinus,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import plus and minus icons
import ContactCard from "../components/ContactCard";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( 
        "service_7ejwmsj",
        "template_05s0c8x",
        formRef.current,
        "xXRK3uCxPq6PWNs5h"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach out to us via email at support@example.com or call us at +123 456 7890.",
    },
    {
      question: "Do you provide custom solutions?",
      answer:
        "Yes, we specialize in creating custom solutions tailored to your business needs.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing model is flexible and depends on the scope and complexity of the project.",
    },
  ];

  // Function to send email

  return (
    <div className="contact__page">
      <Navbar />
      <div className="contact__container">
        {/* About Us Section */}
        <section className="about">
          <h1 className="about__heading">About Us</h1>
          <div className="about__content">
            <div className="about__image">
              <img src={tempImg} alt="About Us" />
            </div>
            <div className="about__text">
              <h3 className="about__subheading">
                Your Gateway to Unforgottable Journeys and seamless Travel
                Experience
              </h3>
              <p className="about__description">
                Discover the world with our travel agency. We offer a wide range
                of services to make your travel experience unforgettable. Our
                team of experts is dedicated to providing you with the best
                travel solutions tailored to your needs. Whether you are
                planning a family vacation, a romantic getaway, or a business
                trip, we have you covered. Let us take care of all the details
                so you can focus on enjoying your journey.
              </p>
              <ul className="about__list">
                <li className="about__list-item">
                  <img src="" alt="icon" />
                  <p>Great Travel experience</p>
                </li>
                <li className="about__list-item">
                  <img src="" alt="icon" />
                  <p>Competitive pricing offers</p>
                </li>
                <li className="about__list-item">
                  <img src="" alt="icon" />
                  <p>Freedom to discover confidence to explore</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="aboutContent__section">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            deserunt libero ipsum earum pariatur ipsa. Magni dolores aliquam
            pariatur eaque numquam magnam cumque doloremque nemo voluptate eius
            tenetur, sint omnis soluta quis sapiente repellat. Inventore fuga
            perferendis maiores odit commodi nisi neque, quidem assumenda
            laudantium sit asperiores, dolorem corrupti expedita!
          </p>

          <h4>Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            deserunt libero ipsum earum pariatur ipsa. Magni dolores aliquam
            pariatur eaque numquam magnam cumque doloremque nemo voluptate eius
            tenetur, sint omnis soluta quis sapiente repellat. Inventore fuga
            perferendis maiores odit commodi nisi neque, quidem assumenda
            laudantium sit asperiores, dolorem corrupti expedita!
          </p>
        </section>

        {/* FAQ Section */}
        <section className="faqSection">
          <h2 className="faq__heading">Frequently Asked Questions</h2>
          <div className="faq__grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq__item ${
                  expandedQuestion === index ? "faq__item--expanded" : ""
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="faq__question-container">
                  <h3 className="faq__question">{faq.question}</h3>
                  <span className="faq__icon">
                    {expandedQuestion === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {expandedQuestion === index && (
                  <p className="faq__answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="contactUs__section">
        {/* Hero section */}
        <div className="contactHero__content">
          <h1 className="contactHero__heading">Contact Us</h1>
          <p className="contactHero__subheading">Get in touch</p>
        </div>

        {/* Card components */}
        <div className="cards__container">
          <ContactCard
            icon= {FaPhone}
            heading="Phone"
            description="Jk Tours offers a seamless and intutive experience for travelers seeking their next adventure, with phone call support."
            contact="+91 810 3868 078"
          />
          <ContactCard
            icon={FaEnvelope}
            heading="Email"
            description="JK Tours have a dedicated team to assist you with any queries you may have, with email support available 24/7."
            contact="Tlq8t@example.com"
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            heading="Location"
            description="Visit us at our office location for a more personalized experience. and get to know us better."
            contact="1234 Street Name, City Name, Country"
          />
        </div>

        {/* Two-Column Layout */}
        <div className="contactContent__container">
          {/* Left Column */}
          <div className="contactContent__left">
            <h4>Get in Touch</h4>
            <h2 className="contactContent__subheading">
              Feel Free to Contact <br /> With Us
            </h2>
            <p className="contactContent__description">
              For any inquires or assistance, feel free to reach out to us. Our team is available 24/7 to assist you with any queries you may have.
              We are here to help you plan your next adventure and make it a memorable experience.
            </p>
          </div>
          {/* Right Column - Form */}

          <div className="contactContent__right">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form__row">
                <div className="form__group">
                  <input
                    type="text"
                    id="firstName"
                    name="user_name"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="form__row">
                <div className="form__group">
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    required
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="date">Desired Date</label>
                  <input type="date" id="date" name="user_date" required />
                </div>
              </div>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="people">Number of People</label>
                  <input type="number" id="people" name="user_people" required />
                </div>
                <div className="form__group">
                  <label htmlFor="destination">Destination</label>
                  <select id="destination" name="user_destination" required>
                    <option value="paris">Kanha National park</option>
                    <option value="new-york">Bandhavghar</option>
                    <option value="tokyo">Pench</option>
                    <option value="other">Bhedaghat</option>
                  </select>
                </div>
              </div>
              <div className="form__row">
                <button type="submit" className="submit__button">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

