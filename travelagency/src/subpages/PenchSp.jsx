import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subpages/kanhaSp.css"; // Keep the existing CSS file

const penchFeatureDetails = [
  {
    icon: "🗺️",
    label: "Location",
    value: "Seoni and Chhindwara districts, Madhya Pradesh & Maharashtra, India",
  },
  {
    icon: "📅",
    label: "Established",
    value: "1975 (as a national park), 1992 (Project Tiger Reserve)",
  },
  {
    icon: "📏",
    label: "Area",
    value: "~292 sq km (MP Core), ~464 sq km (MP Buffer) + Maharashtra Side",
  },
  {
    icon: "🐅",
    label: "Famous For",
    value: "Royal Bengal Tiger, Inspiration for 'The Jungle Book'",
  },
  {
    icon: "🐾",
    label: "Other Wildlife",
    value: "Leopard, Wild Dog, Gaur, Sloth Bear, various deer species, birds",
  },
  {
    icon: "🌲",
    label: "Vegetation",
    value: "Southern tropical moist deciduous forest",
  },
  {
    icon: "📍",
    label: "Nearest City",
    value: "Seoni, Chhindwara (MP), Nagpur (Maharashtra)",
  },
  {
    icon: "✈️",
    label: "Nearest Airport",
    value: "Nagpur (~120 km)",
  },
  { icon: "🚂", label: "Nearest Railway", value: "Seoni, Chhindwara, Nagpur" },
  {
    icon: "🗓️",
    label: "Best Time to Visit",
    value: "October to June (Park closed July to September)",
  },
  {
    icon: "🎯",
    label: "Key Zones",
    value: "Turia, Karmajhiri (MP), Sillari (Maharashtra)",
  },
  {
    icon: "🔥",
    label: "Unique Fact",
    value: "Named after the Pench River that flows through the park",
  },
];

function PenchSp() {
  const safariTimings = [
    { type: "Morning Safari", time: "Sunrise to 11:00 AM (varies seasonally)" },
    { type: "Afternoon Safari", time: "03:00 PM to Sunset (varies seasonally)" },
    // Add more safari types if applicable
  ];

  const coreZoneInfo = [
    {
      name: "Turia Zone",
      gates: ["Turia Gate"],
      timings: "As per general timings",
    },
    {
      name: "Karmajhiri Zone",
      gates: ["Karmajhiri Gate"],
      timings: "As per general timings",
    },
    {
      name: "Sillari Zone", // Maharashtra Zone
      gates: ["Sillari Gate"],
      timings: "As per general timings",
    },
    // Add other core zones
  ];

  const bufferZoneInfo = [
    {
      name: "Wolf Sanctuary (MP)", // Example Buffer
      gates: ["..."],
      timings: "Specific timings may apply",
    },
    // Add other buffer zones
  ];

  const coreZoneIndianPrice = 8000; // Updated
  const coreZoneForeignerPrice = 16000;
  const bufferZoneIndianPrice = 6500;
  const bufferZoneForeignerPrice = 13000;
  const weekendPriceIncrease = 400; // Updated

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
      name: "Totladoh Dam",
      description:
        "A scenic dam and reservoir, offering beautiful views and birdwatching.",
      distance: "Near the park",
    },
    {
      name: "Kohka Lake",
      description:
        "A picturesque lake, ideal for relaxation and enjoying nature.",
      distance: "Near the park",
    },
    {
      name: "Rapti Ghat",
      description:
        "A serene spot on the Pench River.",
      distance: "Within the park",
    },
  ];

  // for activites and services
  const activitiesAndServices = [
    {
      name: "Jeep Safari",
      description: "Explore the park's diverse flora and fauna.",
    },
    {
      name: "Nature Trails",
      description: "Guided walks to experience the natural beauty.",
    },
    {
      name: "Boating",
      description: "Available at certain water bodies within/near the park.",
    },
    {
      name: "Bird Watching",
      description: "Pench is a haven for bird enthusiasts.",
    },
  ];

  // faq section

  const faqs = [
    {
      question: "What is the best way to reach Pench National Park?",
      answer:
        "The nearest airport is Nagpur, and the nearest railway stations are Seoni and Chhindwara. Road access is also good.",
    },
    {
      question: "What is the entry fee for Pench National Park?",
      answer:
        "Entry fees vary for Indian and foreign nationals, and also between core and buffer zones.  Check our pricing section for details.",
    },
    {
      question: "What animals can I see in Pench National Park?",
      answer:
        "The park is famous for tigers, but you can also see leopards, wild dogs, gaur, deer, and many bird species.",
    },
    {
      question: "Is Pench National Park open throughout the year?",
      answer:
        "The park is generally open from October to June and closed during the monsoon season (July to September).",
    },
    {
      question: "Is online booking available for Pench Safari?",
      answer: "Yes, online booking is available, and you can also book through authorized tour operators.  You can start by filling out our inquiry form.",
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
          {penchFeatureDetails.map((item, index) => (
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
            safaris in Pench National Park, covering ticket fees, guide
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
          <h2>Enhance Your Pench Experience</h2>
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
            Experience the Wild. Discover Pench National Park!
          </h2>
          <p className="cta-subtext">
            Embark on a thrilling safari and witness the beauty of Pench. Book
            your adventure now!
          </p>

          <Link to="/inquiry" className="cta-button-link">
            <button className="cta-button">Book Your Safari Now</button>
          </Link>
        </div>
        <div className="cta-image">
          {/* Replace 'your-safari-image.jpg' with the actual path to your image */}
          <img
            src={require("../assets/images/pench.jpg")} // Changed image
            alt="Pench Safari Adventure"
          />
        </div>
      </div>
    </div>
  );
}

export default PenchSp;
