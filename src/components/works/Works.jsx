import React from 'react'
import "./works.scss"
import { useState } from "react";
 
export default function Works() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Sweet Junction",
      desc:
        "Designed a website named Sweet Junction, for purchasing favourite desserts in one place. Designed using HTML, CSS, JS, Flask, and MongoDB Compass,It stores data entered by the user while placing orders.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    
      },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Luminous Homes",
      desc:
        "Designed to showcase the beauty of lights, where you can buy them.Designed a User Interface of a website using HTML, CSS, and JS with node JS and mongoDB compass.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/globe.png",

      title: "Weather App",
      desc:
        "It is created using React JS and it is a user-friendly application that provides real-time weather information from the OpenWeather API. Users can easily search for weather conditions in any location worldwide. ",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <p>Certifiacate</p> */}
                  <a href="https://github.com/nikamaish" target='_blank' rel='noopener'><span>GitHub</span></a> 
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
