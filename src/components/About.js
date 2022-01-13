import React from "react";
import "./about.css";
import { useState } from "react";
import face from "../img/face.jpg";
import award from "../img/award.png";
import about from "../img/about.jpg";
import Card from "./Card";

const About = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      img:
        "https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_960_720.jpg",
      heading: "heading1",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "admin",
    },
    {
      id: 2,
      img:
        "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg",
      heading: "heading2",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "anna",
    },
    {
      id: 3,
      img:
        "https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_960_720.jpg",
      heading: "heading3",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "admin",
    },
  ]);
  return (
    <div className="about-p">
      <div className="ab-section">
        <div className="ab-left">
          <div className="ab-card bg"></div>
          <div className="ab-card">
            <img src={about} className="ab-img" />
          </div>
        </div>
        <div className="ab-right">
          <h1 className="ab-title">TECHNOLOGIES</h1>
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
      <div className="ab-cards">
      <Card card={card} />
    </div>
    </div>
  );
};

export default About;
