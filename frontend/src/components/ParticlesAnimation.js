import React, { useState, useEffect } from "react";
import "./ParticlesAnimation.css"; // Import the CSS file
import "./ShimmerButton.css";
import "./RainbowInput.css";

const ParticlesAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [crownJumpToA, setCrownJumpToA] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 1000); // Start animation after 1 second

    // Crown animation (crownFallWithP) is 2s, so start crownBounceToA right after (1s delay + 2s animation = 3s)
    setTimeout(() => setCrownJumpToA(true), 3000);
  }, []);

  return (
    <>
      {/* <AuroraBackground /> */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ paddingTop: "4%", width: "100%" }}
          className="animation-container"
        >
          <div
            className={`crown ${startAnimation ? "crown-move-with-p" : ""} ${
              crownJumpToA ? "crown-jump-to-a" : ""
            }`}
          >
            👑
          </div>
          <span
            className={`letter p ${startAnimation ? "pushed-and-died" : ""}`}
          >
            P
          </span>
          <span className={`word ${startAnimation ? "bounce-push" : ""}`}>
            Articles By WeekendDevs
          </span>
        </div>
        <div className="subtitle-text">Small byte sized tech articles</div>
        <div className="form-container">
          <div
            style={{ marginRight: "15px" }}
            className={`input-container ${isActive ? "active" : ""}`}
          >
            <input
              type="text"
              className="rainbow-input"
              placeholder={"Enter your email"}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
            <div className="rainbow-border"></div>
          </div>

          <div>
            <button className="shimmer-button">
              Sign up now
              <div className="shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticlesAnimation;
