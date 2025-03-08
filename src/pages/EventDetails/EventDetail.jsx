import { useParams, useNavigate } from "react-router-dom";
import eventRules from "../../assets/data";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./EventDetail.css"; 

function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const tiltRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js"; 
    script.async = true;

    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 6,
          size: { min: 700, max: 1400, pulse: 0 },
          speed: { x: { min: 5, max: 5 }, y: { min: 5, max: 5 } },
          colors: {
            background: "transparent",
            particles: ["#000000", "#fd68da", "#3808c9", "#9370db"]
          },
          blending: "lighten",
          opacity: { center: 0.6, edge: 0 },
          skew: 0,
          shapes: ["c"]
        });
      } else {
        console.error("FinisherHeader failed to load.");
      }
    };

    script.onerror = () => console.error("Failed to load finisher-header script.");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: false,
        reverse: true,
      });
    }
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const event = eventRules.find((event) => event.key === slug);

  return (
    <div className="event-container">
   
      <div className="finisher-header"></div> 

      <div ref={tiltRef} className="event-frame" data-aos="zoom-in" data-aos-duration="1200">
        {event ? (
          <div className="event-content">
             <button className="back-button absolute top-6 text-lg  hover:scale-105  hidden md:block" onClick={() => navigate(-1)} aria-label="Go back" role="button">
            ⬅ Back
          </button>
            <div className="event-top">
              <h1 className="event-name">{event.name}</h1>
            </div>
            <div className="event-middle">
              <p className="event-rules-title">Rules</p>
              <ul className="event-rules-list">
                {event.rules.map((rule, index) => (
                  <li key={index} className="rule-item">&rarr; {rule}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <h1 className="not-found"> Event Not Found </h1>
        )}

        <div className="event-bottom">
          <button className="register-button mt-5" aria-label="Register for event" role="button">
          <a
              href="https://forms.gle/FJ8RrP9WGk9UYZrz8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 font-bold"
            >
              Register
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
