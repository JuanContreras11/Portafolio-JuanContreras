import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Fronted Developer | transforming Ideas into Seamless and
          Visually Stunning Web Solution
        </p>
      </div>

      <div className="hero-image">
        <div>
          <div className="tech-icon">
            <img src="../public\Screenshot_1.jpg" alt="React" />
          </div>
          <img src="images/react.svg" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="images/node.svg" alt="Node" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
