import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subpages/kanhaSp.css"; //  Keep the existing CSS file, and I'll adjust CSS where needed.

const bandhavgarhFeatureDetails = [
  {
    icon: "🗺️",
    label: "Location",
    value: "Umaria district, Madhya Pradesh, India",
  },
  {
    icon: "📅",
    label: "Established",
    value: "1968 (as a national park), 1993 (Project Tiger Reserve)",
  },
  {
    icon: "📏",
    label: "Area",
    value: "~105 sq km (Core zone), ~437 sq km (Buffer zone)",
  },
  {
    icon: "🐅",
    label: "Famous For",
    value: "Royal Bengal Tiger (High Density), Ancient Fort",
  },
  {
    icon: "🐾",
    label: "Other Wildlife",
    value: "Leopard, Deer, Wild Dog, Sloth Bear, Gaur, various birds",
  },
  {
    icon: "🌲",
    label: "Vegetation",
    value: "Mixed deciduous forests, Sal and Bamboo",
  },
  {
    icon: "📍",
    label: "Nearest City",
    value: "Umaria (~32 km)",
  },
  {
    icon: "✈️",
    label: "Nearest Airport",
    value: "Jabalpur (~200km), Khajuraho (~250km)",
  },
  { icon: "🚂", label: "Nearest Railway", value: "Umaria, Katni" },
  {
    icon: "🗓️",
    label: "Best Time to Visit",
    value: "October to June (Park closed July to September)",
  },
  {
    icon: "🎯",
    label: "Key Zones",
    value: "Tala, Magdhi, Khitauli, Bamera", // Added Bamera
  },
  {
    icon: "🔥",
    label: "Unique Fact",
    value: "Highest density of tigers in India",
  },
];

function BandhavgarhSp() {
  const safariTimings = [
    { type: "Morning Safari", time: "Sunrise to 11:00 AM (varies seasonally)" },
    {
      type: "Afternoon Safari",
      time: "02:30 PM to Sunset (varies seasonally)", // Changed time
    },
    // Add more safari types if applicable (e.g., Full Day)
  ];

  const coreZoneInfo = [
    {
      name: "Tala Zone",
      gates: ["Tala Gate"],
      timings: "As per general timings",
    },
    {
      name: "Magdhi Zone",
      gates: ["Magdhi Gate"],
      timings: "As per general timings",
    },
    {
      name: "Khitauli Zone",
      gates: ["Khitauli Gate"],
      timings: "As per general timings",
    },
    {
      name: "Bamera Zone", // Added Bamera Zone
      gates: ["..."],  // Add gates if known
      timings: "As per general timings",
    },
    // Add other core zones and their specific details
  ];

  const bufferZoneInfo = [
    {
      name: "Panpatha Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may apply",
    },
    {
      name: "Dhamokhar Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may apply",
    },
    // Add other buffer zones and their specific details
  ];

  const coreZoneIndianPrice = 9000; // Updated prices
  const coreZoneForeignerPrice = 18000;
  const bufferZoneIndianPrice = 7500;
  const bufferZoneForeignerPrice = 15000;
  const weekendPriceIncrease = 600;  // Updated weekend price

  // Function to check if today is a weekend (Saturday or Sunday)
  const isWeekend = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const getWeekendAdjustedPrice = (basePrice) => {
    return isWeekend() ? basePrice + weekendPriceIncrease : basePrice;
  };

  // for near by attraction
  const nearbyAttractions = [
    {
      name: "Bandhavgarh Fort",
      description:
        "An ancient fort within the park, with temples and historical significance.",
      distance: "Located within the park",
    },
    {
      name: "Shesh Shaiya",
      description:
        "A Vishnu statue reclining on Shesh Naga, near a spring within the fort.",
      distance: "Located within the park",
    },
    {
      name: "Jwalamukhi Temple",
      description:
        "A temple near the fort, adding to the historical and religious importance of the area.",
      distance: "Near the fort",
    },
    // Add more nearby attractions
  ];

  // for activites and services
  const activitiesAndServices = [
    {
      name: "Jeep Safari",
      description:
        "The primary way to explore the park and see wildlife.",
    },
    {
      name: "Fort Visit",
      description:
        "Visit to the ancient Bandhavgarh Fort (requires special permit).",
    },
    {
      name: "Nature Walks",
      description:
        "Guided walks in designated areas.",
    },
    {
      name: "Bird Watching",
      description:
        "The park is home to a variety of bird species.",
    },
    // Add more activities and services
  ];

  // faq section

  const faqs = [
    {
      question: "What is Bandhavgarh National Park famous for?",
      answer:
        "Bandhavgarh is renowned for its high density of Royal Bengal Tigers. It also has an ancient fort with historical significance.",
    },
    {
      question: "What are the different zones for safari in Bandhavgarh?",
      answer:
        "The main zones are Tala, Magdhi, and Khitauli.  Bamera is also a zone. There are also buffer zones like Panpatha and Dhamokhar.",
    },
    {
      question: "What is the best time to visit Bandhavgarh?",
      answer:
        "The best time to visit is from October to June. The park is closed from July to September.",
    },
    {
      question: "How to book a safari in Bandhavgarh?",
      answer:
        "You can book safari through the online portal or through authorized tour operators.  Filling out our inquiry form is a good start.",
    },
    {
        question: "Is the fort visit included in the safari?",
        answer: "Visit to Bandhavgarh fort is not included in the regular safari and requires a special permit.",
    }
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
          {bandhavgarhFeatureDetails.map((item, index) => (
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
            safaris in Bandhavgarh National Park, covering ticket fees, guide
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
          <h2>Enhance Your Bandhavgarh Experience</h2>
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
            Discover the Land of the Tiger. Explore Bandhavgarh!
          </h2>
          <p className="cta-subtext">
            Experience the thrill of encountering tigers in their natural
            habitat. Book your Bandhavgarh safari today!
          </p>

          <Link to="/inquiry" className="cta-button-link">
            <button className="cta-button">Book Your Safari Now</button>
          </Link>
        </div>
        <div className="cta-image">
          {/* Replace 'your-safari-image.jpg' with the actual path to your image */}
          <img
            src={require("../assets/images/safari.jpg")} // Changed image
            alt="Bandhavgarh Safari Adventure"
          />
        </div>
      </div>
    </div>
  );
}

export default BandhavgarhSp;
