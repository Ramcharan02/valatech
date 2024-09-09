import React from 'react';
import '../Styles/corevalues.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faHandshake,
  faUserTie,
  faUsers,
  faTrophy,
  faSyncAlt,
  faShieldAlt,
  faCheckCircle,
  faChartLine,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons'; 

function CoreValues() {
  return (
    <div className="core-values-container">
      {/* Header Section */}
      <div className="core-values-header">
        <h1 className="core-values-heading">Our Core Values</h1>
        <p className="core-values-intro">
          Our core values guide every decision and action we take, ensuring we remain aligned with
          our strategic goals and ethical standards.
        </p>
      </div>

      {/* Values List */}
      <div className="values-list">
        <div className="value-item">
          <FontAwesomeIcon icon={faLightbulb} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">
              We embrace creativity and forward-thinking to develop cutting-edge solutions that drive
              progress.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faHandshake} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Integrity</h3>
            <p className="value-description">
              We maintain honesty, transparency, and ethical standards in all business practices and
              interactions.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faUserTie} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Customer Focus</h3>
            <p className="value-description">
              We prioritize customer needs and delivering exceptional service to exceed client
              expectations.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faUsers} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Collaboration</h3>
            <p className="value-description">
              We foster a team-oriented environment that encourages cooperation, knowledge sharing,
              and collective problem-solving.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faTrophy} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Excellence</h3>
            <p className="value-description">
              We strive for the highest quality in all aspects of work, from technical solutions to
              customer service.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faSyncAlt} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Adaptability</h3>
            <p className="value-description">
              We are flexible and responsive to changing technologies, market trends, and customer
              needs.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faShieldAlt} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Security</h3>
            <p className="value-description">
              We uphold strong security practices to protect data, systems, and networks from threats
              and breaches.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faCheckCircle} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Accountability</h3>
            <p className="value-description">
              We take ownership of actions, decisions, and results to build trust and reliability.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faChartLine} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Continuous Improvement</h3>
            <p className="value-description">
              We commit to ongoing learning, skill enhancement, and process optimization to stay
              competitive and efficient.
            </p>
          </div>
        </div>

        <div className="value-item">
          <FontAwesomeIcon icon={faLeaf} className="value-icon" />
          <div className="value-content">
            <h3 className="value-title">Sustainability</h3>
            <p className="value-description">
              We incorporate environmentally responsible practices and consider the long-term impact
              of business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
