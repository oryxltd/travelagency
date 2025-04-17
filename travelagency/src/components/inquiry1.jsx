import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./inquiry.css";
import emailjs from "@emailjs/browser";
// import emailjs from "emailjs-com";

function Inquiry() {
  const [destination, setDestination] = useState("");
  const [zone, setZone] = useState("");
  const [shift, setShift] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [preferredDate, setPreferredDate] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [activities, setActivities] = useState([]);
  const formRef = useRef();

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    switch (name) {
      case "destination":
        setDestination(value);
        setZone("");
        setShift("");
        break;
      case "zone":
        setZone(value);
        setShift("");
        break;
      case "shift":
        setShift(value);
        break;
      case "name":
        setName(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "nationality":
        setNationality(value);
        break;
      case "passengers":
        setPassengers(parseInt(value));
        break;
      case "preferredDate":
        setPreferredDate(value);
        break;
      case "accommodations":
        if (checked) {
          setAccommodations([...accommodations, value]);
        } else {
          setAccommodations(accommodations.filter((item) => item !== value));
        }
        break;
      case "activities":
        if (checked) {
          setActivities([...activities, value]);
        } else {
          setActivities(activities.filter((item) => item !== value));
        }
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // service id service_h8y2fdd
    //
    emailjs
      .sendForm(
        "service_7ejwmsj", // Replace with your EmailJS service ID
        "template_rtt38fu", // Replace with your EmailJS template ID
        formRef.current,
        "xXRK3uCxPq6PWNs5h" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Inquiry sent successfully!");
          // Optionally reset the form after successful submission
          formRef.current.reset();
          setDestination("");
          setZone("");
          setShift("");
          setName("");
          setMobile("");
          setEmail("");
          setNationality("");
          setPassengers(1);
          setPreferredDate("");
          setAccommodations([]);
          setActivities([]);
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  const getZoneOptions = () => {
    switch (destination) {
      case "Kanha":
        return ["Kanha Zone", "Kisli Zone", "Mukki Zone", "Sarahi Zone" , "Buffer Zone"];
      case "Bandhavgarh":
        return ["Tala Zone", "Magdhi Zone", "Khitauli Zone", "Buffer Zone (Dhamokhar Zone, Johila Zone, Panpatha Zone, Manpur Zone, Pachpedi Zone)"];
      case "Pench":
        return ["Madhya Pradesh Side", "Maharashtra Side"];
      case "Panna":
        return ["Core Zone (Panna National Park)", "Buffer Zones (Ken Gharial Wildlife Sanctuary, North and South Panna Forest Divisions)"];
      default:
        return [];
    }
  };

  const getShiftOptions = () => {
    if (zone) {
      const zoneNumber = parseInt(zone.split(" ")[1]);
      if (!isNaN(zoneNumber) && zoneNumber <= 2) {
        return ["Morning", "Afternoon"];
      } else if (!isNaN(zoneNumber)) {
        return ["Morning", "afternoon", "Night"];
      }
    }
    return [];
  };

  return (
    <div className="inquiry-page modern-inquiry-page">
      <Navbar />
      <div className="inquiry-container modern-inquiry-container">
        <h2>Let's Plan Your Safari</h2>
        <form ref={formRef} onSubmit={sendEmail} className="modern-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="destination">Safari Destination</label>
              <div className="radio-group modern-radio-group">
                <div>
                  <input
                    type="radio"
                    id="kanha"
                    name="destination"
                    value="Kanha"
                    checked={destination === "Kanha"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="kanha">Kanha</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="bandhavgarh"
                    name="destination"
                    value="Bandhavgarh"
                    checked={destination === "Bandhavgarh"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="bandhavgarh">Bandhavgarh</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="pench"
                    name="destination"
                    value="Pench"
                    checked={destination === "Pench"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="pench">Pench</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="panna"
                    name="destination"
                    value="Panna"
                    checked={destination === "Panna"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="panna">Panna</label>
                </div>
              </div>
            </div>

            {destination && (
              <div className="form-group">
                <label htmlFor="zone">Safari Zone</label>
                <select
                  id="zone"
                  name="zone"
                  value={zone}
                  onChange={handleInputChange}
                >
                  <option value="">Select Zone</option>
                  {getZoneOptions().map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {zone && (
              <div className="form-group">
                <label htmlFor="shift">Safari Shift</label>
                <div className="radio-group modern-radio-group">
                  {getShiftOptions().map((option) => (
                    <div key={option}>
                      <input
                        type="radio"
                        id={option.toLowerCase()}
                        name="shift"
                        value={option}
                        checked={shift === option}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={option.toLowerCase()}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={nationality}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="passengers">Number of Passengers</label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                min="1"
                value={passengers}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={preferredDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group full-width">
              <h3>Additional Preferences On Demand</h3>
              <div className="checkbox-group modern-checkbox-group">
                {/* ... accommodation and activity checkboxes ... */}
                <div>
                  <input
                    type="checkbox"
                    id="pickup"
                    name="accommodations"
                    value="Pickup & Drop-off"
                    checked={accommodations.includes("Pickup & Drop-off")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="pickup">Pickup & Drop-off</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="stay"
                    name="accommodations"
                    value="Accommodation"
                    checked={accommodations.includes("Accommodation")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="stay">Accommodation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sunset"
                    name="activities"
                    value="Sunset Point Visit"
                    checked={activities.includes("Sunset Point Visit")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="sunset">Sunset Point Visit</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="baiga"
                    name="activities"
                    value="Baiga Dance Performance"
                    checked={activities.includes("Baiga Dance Performance")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="baiga">Baiga Dance Performance</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="waterfall"
                    name="activities"
                    value="Waterfall Excursion"
                    checked={activities.includes("Waterfall Excursion")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="waterfall">Waterfall Excursion</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="trail"
                    name="activities"
                    value="Trail Tracking"
                    checked={activities.includes("Trail Tracking")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="trail">Trail Tracking</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="birding"
                    name="activities"
                    value="Bird Watching"
                    checked={activities.includes("Bird Watching")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="birding">Bird Watching</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="village"
                    name="activities"
                    value="Village Tour"
                    checked={activities.includes("Village Tour")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="village">Village Tour</label>
                </div>
              </div>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="inquire-button modern-button">
                Inquire Now
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Inquiry;
