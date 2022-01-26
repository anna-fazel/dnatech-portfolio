import React from "react";
import "./about.css";
import { useState } from "react";

import Card from "./Card";
import Animate from "./Animate";
import Slider from "./Slider";

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
    <div className="aboutPage">
      <div className="ab-header">
        <h1>About Us</h1>
      </div>
      <Animate />
      <div className="ab-cards">
        <Card card={card} />
      </div>
      <Slider />
    </div>
  );
};

export default About;
