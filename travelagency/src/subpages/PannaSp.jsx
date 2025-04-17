import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subpages/kanhaSp.css"; // Keep the existing CSS file

const pannaFeatureDetails = [
  {
    icon: "🗺️",
    label: "Location",
    value: "Panna and Chhatarpur districts, Madhya Pradesh, India",
  },
  {
    icon: "📅",
    label: "Established",
    value: "1981 (as a national park), 1994 (Project Tiger Reserve)",
  },
  {
    icon: "📏",
    label: "Area",
    value: "~543 sq km (Core zone), ~1000+ sq km (including buffer)",
  },
  {
    icon: "🐅",
    label: "Famous For",
    value: "Tiger, Ken River, Scenic Beauty, Gharial Reintroduction",
  },
  {
    icon: "🐾",
    label: "Other Wildlife",
    value: "Leopard, Wild Dog, Sloth Bear, Deer, Gharial, many bird species",
  },
  {
    icon: "🌲",
    label: "Vegetation",
    value: "Tropical dry deciduous forest",
  },
  {
    icon: "📍",
    label: "Nearest City",
    value: "Khajuraho (~25 km)",
  },
  {
    icon: "✈️",
    label: "Nearest Airport",
    value: "Khajuraho Airport",
  },
  { icon: "🚂", label: "Nearest Railway", value: "Khajuraho" },
  {
    icon: "🗓️",
    label: "Best Time to Visit",
    value: "October to April (Park open year-round, but best in these months)",
  },
  {
    icon: "🎯",
    label: "Key Zones",
    value: "Madla, Hinouta, Talgaon",
  },
  {
    icon: "🔥",
    label: "Unique Fact",
    value: "Successful tiger reintroduction after local extinction",
  },
];

function PannaSp() {
  const safariTimings = [
    { type: "Morning Safari", time: "Sunrise to 11:00 AM (varies seasonally)" },
    { type: "Afternoon Safari", time: "02:30 PM to Sunset (varies seasonally)" }, // Corrected time
    // Add more safari types if applicable
  ];

  const coreZoneInfo = [
    {
      name: "Madla Zone",
      gates: ["Madla Gate"],
      timings: "As per general timings",
    },
    {
      name: "Hinouta Zone",
      gates: ["Hinouta Gate"],
      timings: "As per general timings",
    },
    {
      name: "Talgaon Zone",
      gates: ["Talgaon Gate"],
      timings: "As per general timings",
    },
    // Add other core zones
  ];

  const bufferZoneInfo = [
    {
      name: "Akola Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may apply",
    },
    // Add other buffer zones as needed
  ];

  const coreZoneIndianPrice = 7500; // Updated
  const coreZoneForeignerPrice = 15000;
  const bufferZoneIndianPrice = 6000; // Updated
  const bufferZoneForeignerPrice = 12000;
  const weekendPriceIncrease = 300; // Updated

  // Function to check if today is a weekend (Saturday or Sunday)
  const isWeekend = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const getWeekendAdjustedPrice = (basePrice) => {
    return isWeekend() ? basePrice + weekendPriceIncrease : basePrice;
  };

  // for near by attraction
  const nearbyAttractions = [
    {
      name: "Khajuraho Temples",
      description:
        "UNESCO World Heritage Site, famous for their intricate sculptures.",
      distance: "25 km from Panna",
    },
    {
      name: "Raneh Falls",
      description:
        "A scenic canyon with waterfalls, formed by the Ken River.",
      distance: "20 km from Panna",
    },
    {
      name: "Ken Gharial Sanctuary",
      description:
        "Located within Panna National Park, dedicated to the conservation of Gharials.",
      distance: "Within Panna National Park",
    },
  ];

  // for activites and services
  const activitiesAndServices = [
    {
      name: "Jeep Safari",
      description: "Explore the park's diverse wildlife and landscapes.",
    },
    {
      name: "Boat Safari",
      description: "Experience the Ken River and its wildlife from a different perspective.",
    },
    {
      name: "Nature Trails",
      description: "Guided walks to appreciate the natural beauty of the park.",
    },
    {
      name: "Cultural Visits",
      description: "Trips to nearby villages to experience the local culture.",
    },
  ];

  // faq section

  const faqs = [
    {
      question: "What is the best time to visit Panna National Park?",
      answer:
        "The best time to visit is from October to April. The park is open year-round, but these months offer the most pleasant weather.",
    },
    {
      question: "What is the entry fee for Panna National Park?",
      answer:
        "Entry fees vary for Indian and foreign nationals and also for core and buffer zones. See our pricing section for details.",
    },
    {
      question: "What is the Ken River famous for in Panna National Park?",
      answer:
        "The Ken River is a major attraction, known for its scenic beauty, gharials, and riverine wildlife.",
    },
    {
      question: "How far is Khajuraho from Panna National Park?",
      answer: "Khajuraho is approximately 25 km away, making it a convenient place to stay and visit.",
    },
    {
      question: "What are the safari options in Panna National Park?",
      answer: "Jeep safaris and boat safaris are available.  Boat safaris are conducted on the Ken River.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="park-overview">
      {" "}
      {/* Main container for the section */}
      <div className="park-overview-details">
        {" "}
        {/* Container for text & button */}
        {/* We replace the old <p> with this div containing the feature list */}
        <div className="park-overview-content park-features-list">
          {pannaFeatureDetails.map((item, index) => (
            <div key={index} className="park-feature-item">
              <span
                className="park-feature-icon"
                role="img"
                aria-label={`${item.label} icon`}
              >
                {item.icon}
              </span>
              <strong className="park-feature-label">{item.label}:</strong>
              <span className="park-feature-value">{item.value}</span>
            </div>
          ))}
        </div>
        
        <Link to="/inquiry" className="cta-button-link">
          <button className="cta-button">Book Now</button>
        </Link>
        {/* safar-info-section */}
        <div className="safari-info-section">
          <h2>Safari Information</h2>

          <div className="safari-types-timings">
            <h3>Safari Types & Timings</h3>
            <ul>
              {safariTimings.map((safari, index) => (
                <li key={index}>
                  <strong>{safari.type}:</strong> {safari.time}
                </li>
              ))}
            </ul>
            <p className="timing-note">
              * Timings are subject to change based on the season and forest
              department regulations. Please verify before booking.
            </p>
          </div>

          <div className="core-buffer-zones">
            <h3>Core & Buffer Zones and Entry Gates</h3>
            <div className="zones-container">
              <div className="core-zones">
                <h4>Core Zones</h4>
                {coreZoneInfo.map((zone, index) => (
                  <div key={index} className="zone-details">
                    <strong>{zone.name}:</strong>
                    <p>
                      <strong>Gates:</strong> {zone.gates.join(", ")}
                    </p>
                    <p>
                      <strong>Timings:</strong> {zone.timings}
                    </p>
                  </div>
                ))}
              </div>
              <div className="buffer-zones">
                <h4>Buffer Zones</h4>
                {bufferZoneInfo.map((zone, index) => (
                  <div key={index} className="zone-details">
                    <strong>{zone.name}:</strong>
                    <p>
                      <strong>Gates:</strong> {zone.gates.join(", ")}
                    </p>
                    <p>
                      <strong>Timings:</strong> {zone.timings}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="booking-note">
            * Booking for core zones is often done well in advance due to
            limited permits. Buffer zone booking procedures may vary.
          </p>
        </div>
        {/* Safari Information end */}
        {/* pricing  */}
        <div className="constant-pricing-section">
          <h2>Simplified Safari Pricing (Per Gypsy)</h2>
          <p className="pricing-note">
            The following are simplified, all-inclusive per-gypsy pricing for
            safaris in Panna National Park, covering ticket fees, guide
            charges, and gypsy hire for up to 6 people.
          </p>
          <div className="pricing-details-container">
            <div className="pricing-category">
              <h3>Core Zones</h3>
              <p>
                <strong>Indian Nationals:</strong> ₹
                {getWeekendAdjustedPrice(coreZoneIndianPrice)} per gypsy
                {isWeekend() && (
                  <span className="weekend-indicator"> (Weekend Price)</span>
                )}
              </p>
              <p>
                <strong>Foreign Nationals:</strong> ₹
                {getWeekendAdjustedPrice(coreZoneForeignerPrice)} per gypsy
                {isWeekend() && (
                  <span className="weekend-indicator"> (Weekend Price)</span>
                )}
              </p>
            </div>

            <div className="pricing-category">
              <h3>Buffer Zones</h3>
              <p>
                <strong>Indian Nationals:</strong> ₹
                {getWeekendAdjustedPrice(bufferZoneIndianPrice)} per gypsy
                {isWeekend() && (
                  <span className="weekend-indicator"> (Weekend Price)</span>
                )}
              </p>
              <p>
                <strong>Foreign Nationals:</strong> ₹
                {getWeekendAdjustedPrice(bufferZoneForeignerPrice)} per gypsy
                {isWeekend() && (
                  <span className="weekend-indicator"> (Weekend Price)</span>
                )}
              </p>
            </div>
          </div>
          <p className="important-note">
            <strong>Important Notes:</strong>
            <ul>
              <li>These prices are per gypsy (up to 6 individuals).</li>
              <li>
                The rates are all-inclusive of entry tickets, guide fees, and
                gypsy hire.
              </li>
              <li>
                Prices are subject to change based on park regulations. Please
                confirm at the time of booking.
              </li>
              <li>
                Weekend prices (Saturday and Sunday) include an additional ₹
                {weekendPriceIncrease} per permit.
              </li>
            </ul>
          </p>
        </div>
        {/* near by attraction start  */}
        <div className="nearby-attractions-section">
          <h2>Nearby Attractions</h2>
          <div className="attractions-list">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <h3>{attraction.name}</h3>
                <p className="attraction-description">
                  {attraction.description}
                </p>
                <p className="attraction-distance">{attraction.distance}</p>
              </div>
            ))}
          </div>
        </div>
        {/* near by attraction end  */}
        {/* accomandations section start*/}
        <div className="accommodations-section">
          <h2>Enhance Your Panna Experience</h2>
          <div className="activities-list">
            {activitiesAndServices.map((item, index) => (
              <div key={index} className="activity-item">
                <h3>{item.name}</h3>
                <p className="activity-description">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="accommodation-note">
            Note: Availability and details of these services and activities may
            vary. Please inquire with local providers for booking and
            information.
          </p>
        </div>
        {/* accomandations section end*/}
        {/* faq section start  */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span
                    className={`arrow ${
                      expandedIndex === index ? "open" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
                {expandedIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* faq section end  */}
      </div>
      {/* call to action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-punchline">
            Discover the Wild Beauty of Panna National Park!
          </h2>
          <p className="cta-subtext">
            Experience thrilling safaris and breathtaking scenery. Book your
            Panna adventure today!
          </p>

          <Link to="/inquiry" className="cta-button-link">
            <button className="cta-button">Book Your Safari Now</button>
          </Link>
        </div>
        <div className="cta-image">
          {/* Replace 'your-safari-image.jpg' with the actual path to your image */}
          <img
            src={require("../assets/images/panna.jpg")} // Changed image
            alt="Panna Safari Adventure"
          />
        </div>
      </div>
    </div>
  );
}

export default PannaSp;
