import React from "react";
import { useState } from "react";
import "../subpages/kanhaSp.css";
import { Link } from "react-router-dom";

const kanhaFeatureDetails = [
  {
    icon: "🗺️",
    label: "Location",
    value: "Mandla & Balaghat districts, Madhya Pradesh, India",
  },
  {
    icon: "📅",
    label: "Established",
    value: "1955 (as a national park), 1973 (under Project Tiger)",
  },
  {
    icon: "📏",
    label: "Area",
    value: "~940 sq. km (Core zone), ~1,000+ sq. km (Buffer zone)",
  },
  {
    icon: "🐅",
    label: "Famous For",
    value: "Royal Bengal Tiger, Barasingha (Hard Ground Swamp Deer)",
  },
  {
    icon: "🐾",
    label: "Other Wildlife",
    value: "Leopard, Sloth Bear, Wild Dog, Indian Gaur, Hyena, etc.",
  },
  {
    icon: "🌲",
    label: "Vegetation",
    value: "Sal & bamboo forests, meadows, and mixed deciduous woods",
  },
  {
    icon: "📍",
    label: "Nearest City",
    value: "Jabalpur (~165 km), Mandla (~65 km)",
  },
  {
    icon: "✈️",
    label: "Nearest Airport",
    value: "Jabalpur Airport, Nagpur , Raipur",
  },
  { icon: "🚂", label: "Nearest Railway", value: "Gondia (125 km), Jabalpur" },
  {
    icon: "🗓️",
    label: "Best Time to Visit",
    value: "October to June (Park closed from July to mid-Oct)",
  },
  { icon: "🎯", label: "Key Zones", value: "Kanha, Mukki, Kisli, Sarai" },
  {
    icon: "🔥",
    label: "Unique Fact",
    value: "Barasingha Reintroduction Success – now mascot of Kanha",
  },
];

// safari info

function KanhaSp() {
  const safariTimings = [
    { type: "Morning Safari", time: "Sunrise to 11:00 AM (varies seasonally)" },
    {
      type: "Afternoon Safari",
      time: "03:00 PM to Sunset (varies seasonally)",
    },
    { type: "Night Safari", time: "07:00 PM to 11:00pm (varies seasonally) " },

    // Add more safari types if applicable (e.g., Full Day)
  ];

  const coreZoneInfo = [
    {
      name: "Kanha Zone",
      gates: ["Khatia Gate", "Mukki Gate", "Sarai Gate"],
      timings: "As per general timings",
    },
    {
      name: "Kisli Zone",
      gates: ["Khatia Gate", "Mukki Gate", "Sarai Gate"],
      timings: "As per general timings",
    },
    {
      name: "Mukki Zone",
      gates: ["Khatia Gate", "Mukki Gate"],
      timings: "As per general timings",
    },
    {
      name: "Sarai Zone",
      gates: ["Khatia Gate", "Sarai Gate"],
      timings: "As per general timings",
    },
    // Add other core zones and their specific details
  ];

  const bufferZoneInfo = [
    {
      name: "Khatia Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may app ",
    },
    {
      name: "Jhaphar Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may app ",
    },
    {
      name: "Sijhora Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may app ",
    },
    {
      name: "Phen Buffer Zone",
      gates: ["..."],
      timings: "Specific timings may app ",
    },
    // Add other buffer zones and their specific details
  ];

  const coreZoneIndianPrice = 8500;
  const coreZoneForeignerPrice = 17000;
  const bufferZoneIndianPrice = 7000;
  const bufferZoneForeignerPrice = 14000;
  const weekendPriceIncrease = 500;

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
      name: "Bamni Dadar (Sunset Point)",
      description:
        "A scenic plateau offering breathtaking sunset views over the Kanha landscape.",
      distance: "Approx. 10 km from Khatia Gate",
    },
    {
      name: "Kawardha Palace",
      description:
        "A historical palace showcasing the rich heritage of the Kawardha region.",
      distance: "Approx. 80 km from Kanha",
    },
    {
      name: "Mandla Fort",
      description:
        "An ancient fort on the banks of the Narmada River, with historical significance.",
      distance: "Approx. 65 km from Kanha",
    },
    // Add more nearby attractions
  ];

  // for activites and services
  const activitiesAndServices = [
    {
      name: "Pickup & Drop-off Services",
      description:
        "Convenient transfers to and from nearby airport or railway stations.",
    },
    {
      name: "Sunset Point Visits",
      description:
        "Guided excursions to scenic viewpoints for breathtaking sunset views.",
    },
    {
      name: "Baiga Dance Performances",
      description:
        "Experience the vibrant culture of the local Baiga tribe through traditional dance.",
    },
    {
      name: "Waterfall Excursions",
      description:
        "Trips to nearby waterfalls, offering refreshing natural beauty.",
    },
    {
      name: "Trail Tracking",
      description:
        "Guided nature walks and trekking on designated forest trails.",
    },
    {
      name: "Bird Watching Tours",
      description:
        "Expert-led tours to spot the diverse avian species of the region.",
    },
    {
      name: "Village Tours",
      description:
        "Immerse yourself in the local rural life with guided village visits.",
    },
    // Add more activities and services
  ];

  // faq section

  const faqs = [
    {
      question: "How can I book a safari in Kanha National Park?",
      answer:
        "Fill out the inquiry form to book your safari. Book early as slots fill up fast, especially on weekends.",
    },
    {
      question: "What wildlife can I expect to see in Kanha?",
      answer:
        "Besides tigers and Barasingha, you can spot leopards, sloth bears, wild dogs (Dholes), Indian Gaur, various deer species, and a wide variety of birds.",
    },
    {
      question: "Is it safe to go on a safari in Kanha?",
      answer:
        "Yes, safaris are conducted in designated vehicles with experienced drivers and guides, making it generally safe. It is important to follow their instructions and park rules.",
    },
    {
      question: "How can I pay for safari bookings and other services?",
      answer:
        "Once you fill out the inquiry form, we will contact you soon regarding the payment procedures and other details.",
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
          {kanhaFeatureDetails.map((item, index) => (
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
        <button className="book-now-button">Book Now</button>
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
            <p className="timing-note">
              * Night safari is only available for Buffer zones
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
            safaris in Kanha National Park, covering ticket fees, guide charges,
            and gypsy hire for up to 6 people.
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
          <h2>Enhance Your Kanha Experience</h2>
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
                    className={`arrow ${expandedIndex === index ? "open" : ""}`}
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
            Unleash Your Inner Explorer. Adventure Awaits in Kanha!
          </h2>
          <p className="cta-subtext">
            Witness the majestic wildlife and breathtaking landscapes. Book your
            unforgettable Kanha safari today!
          </p>

          <Link to="/inquiry" className="cta-button-link">
            <button className="cta-button">Book Your Safari Now</button>
          </Link>
        </div>
        <div className="cta-image">
          {/* Replace 'your-safari-image.jpg' with the actual path to your image */}
          <img
            src={require("../assets/images/callToAction.jpg")}
            alt="Kanha Safari Adventure"
          />
        </div>
      </div>
    </div>
  );
}

export default KanhaSp;
