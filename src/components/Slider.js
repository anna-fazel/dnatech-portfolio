import React from "react";
import { useState } from "react";
import "./slider.css";
import arrow from "../img/arrow.png";
import design from "../img/design.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dataslide = [
    {
      id: 1,
      icon: "../../img/globe.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: 2,
      icon: "../../img/writing.png",
      title: "Web Development",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: 3,
      icon: "../../img/mobile.png",
      title: "App Developement",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
  ];

  const handleClick = (way) => {
    way === "lefty"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < dataslide.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="slidePage">
      <div className="s-header">
        <h1>Services</h1>
      </div>
      <div className="slide">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {dataslide.map((d) => (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="icon" />
                    </div>
                    <h2>{d.title}</h2>
                    <p> {d.desc}</p>
                    
                  </div>
                </div>
                <div className="right">
                  <img
                    src={design}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src={arrow}
          className="arrow lefty"
          alt=""
          onClick={() => handleClick("lefty")}
        />
        <img
          src={arrow}
          className="arrow righty"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Slider;
