import React, { useState, useEffect } from "react";
import "./Minting.css";
import rocket from "../../assets/UniqueCollection1.png";

function Minting() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-01T00:00:00"); // Update to your desired date
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h1 className="countdown-title">Minting</h1>
      <div className="countdown-subtitle">
        <img src={rocket} alt="Rocket Icon" className="rocket-icon" />
        <span>
          Start Coming <span className="highlight">Soon</span>
        </span>
      </div>
      <div className="timer">
        <div className="time-box">
          <span className="time-value">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="time-label">Days</span>
        </div>
        <span className="time-divider">:</span>
        <div className="time-box">
          <span className="time-value">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="time-label">Hours</span>
        </div>
        <span className="time-divider">:</span>
        <div className="time-box">
          <span className="time-value">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="time-label">Minutes</span>
        </div>
        <span className="time-divider">:</span>
        <div className="time-box">
          <span className="time-value">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Minting;
