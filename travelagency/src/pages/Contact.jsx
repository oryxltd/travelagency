import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
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

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1v4q7u9",
        "template_1v4q7u9",
        form.current,
        "user_1v4q7u9"
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
            icon={FaPhone}
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
            <p className="contactContent__subheading">
              Feel Free to Contact With Us
            </p>
            <p className="contactContent__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Right Column - Form */}
          <div className="contactContent__right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form__group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form__group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form__group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form__group">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="people">Number of People</label>
                <input type="number" id="people" name="people" required />
              </div>
              <div className="form__group">
                <label htmlFor="date">Desired Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form__group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required />
              </div>
              <button type="submit" className="submit__button">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// next task to done
// 1. Add the necessary CSS to style the Contact page.
// setup email funtionality using emailjs
// responsive ness
// package details page
