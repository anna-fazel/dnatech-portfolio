import './animate.css';
import React from "react";
import award from "../img/award.png";
import about from "../img/about.jpg";

const Animate = () => {
  
  return (
    <div className="animate"> 
    <div className="an-left">
      <div className="ab-card bg"></div>
      <div className="ab-card">
        <img src={about} className="ab-img" />
      </div>
    </div>
    <div className="an-right">
      <h2 className="ab-title">MODERN TECHNOLOGIES</h2>
      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Django</div>
          <div className="i-title-item">Python</div>
          <div className="i-title-item">ReactJS</div>
          <div className="i-title-item">HTML</div>
          <div className="i-title-item">CSS</div>
          <div className="i-title-item">JavaScript</div>
          <div className="i-title-item">SCSS</div>
          <div className="i-title-item">jQuery</div>
        </div>
      </div>

      <p className="ab-desc">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reprehenderit
        exercitationem iste voluptatum odit expedita assumenda, aliquid et,
        placeat magnam. Et, exercitationem! Lorem ipsum dolor sit.
      </p>
      <div className="ab-award">
        <img src={award} alt="" className="ab-award-img" />
        <div className="ab-award-text">
          <h4 className="ab-award-title">Award Title</h4>
          <p className="ab-award-desc">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
   
  </div>
  );
};

export default Animate;
