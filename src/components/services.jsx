import React from 'react';
import '../Styles/services.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faProjectDiagram, faCloud, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons'; 

function Services() {
  return (
    <div className="services-container" id='services'>
      {/* Heading and Introductory Comment */}
      <div className="services-header">
        <h1 className="services-heading">Services We Provide</h1>
        <p className="services-intro">
          At Vala Tech, we are committed to offering a wide range of services that cater to the diverse
          needs of our clients. Our goal is to deliver innovative and reliable solutions that help
          businesses thrive in today’s competitive market.
        </p>
      </div>

      {/* Software Development Section */}
      <div className="service-box">
        <h2 className="service-title">
          <FontAwesomeIcon icon={faCode} className="service-icon" /> Software Development
        </h2>
        <p className="service-description">
          We encompass a range of offerings designed to meet diverse client needs. Here are some key
          services under software development:
        </p>
        <ul className="service-list">
          <li>
            <strong>Custom Software Development:</strong> Tailoring software solutions to meet the
            specific needs and requirements of a client, ranging from small-scale applications to
            large, complex enterprise systems.
          </li>
          <li>
            <strong>Web Application Development:</strong> Creating responsive and interactive web
            applications using various frameworks and technologies to ensure seamless user
            experiences.
          </li>
        </ul>
      </div>

      {/* Project Management Section */}
      <div className="service-box">
        <h2 className="service-title">
          <FontAwesomeIcon icon={faProjectDiagram} className="service-icon" /> Project Management
        </h2>
        <p className="service-description">
          At Vala Tech, project services focus on overseeing the planning, execution, and delivery
          of technology projects to ensure they meet client requirements, are delivered on time, and
          stay within budget. Key aspects include:
        </p>
        <ul className="service-list">
          <li>Project Planning and Initiation</li>
          <li>Resource Management</li>
          <li>Task and Workflow Management</li>
          <li>Risk Management</li>
          <li>Agile and Scrum Methodologies</li>
          <li>Communication and Collaboration</li>
          <li>Quality Assurance and Testing</li>
          <li>Budget and Cost Management</li>
          <li>Change Management</li>
          <li>Project Delivery and Closure</li>
          <li>Performance Monitoring and Reporting</li>
        </ul>
      </div>

      {/* Cloud Services Section */}
      <div className="service-box">
        <h2 className="service-title">
          <FontAwesomeIcon icon={faCloud} className="service-icon" /> Cloud Services
        </h2>
        <p className="service-description">
          Vala Tech offers a range of Cloud services that enable businesses to leverage cloud
          computing technologies for enhanced flexibility, scalability, and cost-efficiency.
        </p>
      </div>

      {/* Business Intelligence Section */}
      <div className="service-box">
        <h2 className="service-title">
          <FontAwesomeIcon icon={faChartLine} className="service-icon" /> Business Intelligence
        </h2>
        <p className="service-description">
          Vala Tech uses data analysis tools and techniques to help organizations make informed
          decisions. BI services transform raw data into meaningful insights that support strategic
          planning and operational improvements.
        </p>
        {/* Staffing Section */}
      <div>
        <h2 className="service-title">
          <FontAwesomeIcon icon={faUsers} className="service-icon" /> Staffing
        </h2>
        <p className="service-description">
          At Vala Tech, we focus on recruiting, hiring, and managing skilled professionals to meet
          the organization's technology needs and project requirements. Effective staffing ensures
          that the right talent is in place to support various IT functions, drive innovation, and
          achieve business goals.
        </p>
      </div>
      </div>

      
    </div>
  );
}

export default Services;
