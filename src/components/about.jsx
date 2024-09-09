import React from 'react';
import '../Styles/about.css';

function About() {
  return (
    <div className="body" id='about'>
      <div className="content-wrapper">
        <div className="about-section">
          <h1 className="about-title">About Us</h1>
          <p className="about-paragraph">
            Vala Tech, based in Maryland, boasts a highly skilled and
            experienced team. We excel at understanding customer needs and delivering high-quality
            solutions promptly.
          </p>

          <p className="about-paragraph">
            We offer cutting-edge business solutions designed to keep you ahead of the competition.
            Our team of experts is committed to delivering personalized services tailored to your
            specific needs in business development, sales, and marketing.
          </p>

          <p className="about-paragraph">
            Our experts aim to function as an extension of your HR department, giving our clients
            access to leading professionals in the industry. Our team of highly skilled specialists
            develops and implements highly profitable products and strategies, all designed to help
            our clients achieve their operational and financial goals.
          </p>
        </div>

        <div className="images-section">
          <img src="../../image1.jpg" alt="Image 1 Description" className="about-image image1" />
          <img src="../../image2.jpg" alt="Image 2 Description" className="about-image image2" />
        </div>
      </div>
    </div>
  );
}

export default About;
