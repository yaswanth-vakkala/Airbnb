import React from "react";
import Hero from "../../public/images/photo-grid.png";
import "./Content.css";

export default function Content() {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img className="hero-image" src={Hero} alt="Hero"></img>
      </div>

      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one of a kind hosts all
        without leaving home.
      </p>
    </div>
  );
}
