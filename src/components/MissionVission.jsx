import React from 'react';
import '../Styles/missionVision.css'; 

function MissionVision() {
  return (
    <div className="mission-vision-container">
      {/* Introduction Section */}
      <div className="intro-section">
        <h1 className="intro-title">Mission and Vision</h1>
        <p className="intro-text">
          At Vala Tech, we believe that every element of our vision is essential to fulfilling our
          mission. Our employees are our most valuable asset. As a company that prioritizes our
          team, we provide timely training in the latest technologies, best practices, and processes
          to ensure we deliver the highest quality outcomes for our customers.
        </p>
      </div>

      {/* Mission and Vision Points Section */}
      <div className="points-container">
        {/* Mission Section */}
        <div className="mission-section">
          <h2 className="section-title">Mission</h2>
          <ul className="points-list">
            <li>Focus on the present and articulate what the company does.</li>
            <li>Identify the target audience (clients, industries, communities).</li>
            <li>Highlight the unique value or services the company provides.</li>
            <li>Keep it concise, clear, and action-oriented.</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <h2 className="section-title">Vision</h2>
          <ul className="points-list">
            <li>Focus on the future and what the company aspires to become or achieve.</li>
            <li>Reflect the company's core values and long-term goals.</li>
            <li>Be inspirational and forward-thinking.</li>
            <li>Keep it broad enough to encompass future growth but specific enough to provide direction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
