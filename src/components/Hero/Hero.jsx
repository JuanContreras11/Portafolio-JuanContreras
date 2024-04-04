import React from "react";
import "./Hero.css";

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

      <div className="hero-img">
        <div>
          <div className="">
            <img src="/Screenshot_1.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className="tech-icon">
            <img src="/react.jpg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="/html.jpg" alt="Node" />
          </div>
          <div className="tech-icon">
            <img src="/css.jpg" alt="Node" />
          </div>
          <div className="tech-icon">
            <img src="/js.jpg" alt="Node" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
