import React, { useState, useEffect } from "react";
import "./ParticlesAnimation.css"; // Import the CSS file
import './ShimmerButton.css'
import './RainbowInput.css'

const ParticlesAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [crownJumpAnimation, setCrownJumpAnimation] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 1000); // Start animation after 1 second
    setTimeout(() => setCrownJumpAnimation(true), 3500); // Crown jumps to A after P animation
  }, []);

  return (
    <>
      {/* <AuroraBackground /> */}
      <div style={{ 
        height: '100vh', 
        minHeight: '100dvh', /* Dynamic viewport height for mobile */
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center',
        padding: '20px 0',
        boxSizing: 'border-box'
      }}>
        <div style={{ paddingTop: '4%', width: '100%' }} className="animation-container">
          <div className={`crown ${startAnimation ? "crown-move-with-p" : ""} ${crownJumpAnimation ? "crown-jump-to-a" : ""}`}>👑</div>
          <span className={`letter p ${startAnimation ? "pushed-and-died" : ""}`}>P</span>
          <span className={`word ${startAnimation ? "bounce-push" : ""}`}>
            Articles By WeekendDevs
          </span>
        </div>
        <div style={{ 
          fontFamily: '"Comic Sans MS", sans-serif', 
          fontSize: 'clamp(1rem, 3vw, 2rem)', 
          fontWeight: '1000', 
          color: 'white', 
          textAlign: 'center', 
          padding: '0 20px',
          marginBottom: '20px'
        }}>Small byte sized tech articles</div>
        <div style={{
          display:'flex', 
          flexDirection: 'row', 
          margin:'15px', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '15px',
          alignItems: 'center'
        }}>
          <div className={`input-container ${isActive ? "active" : ""}`}>
            <input
              type="text"
              className="rainbow-input"
              placeholder={'Enter your email'}
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
