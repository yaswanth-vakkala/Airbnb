import React from "react";
import "./Card.css";
import katie from "../../public/images/katie-zaferes.png";
import star from "../../public/images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.oSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location == "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card-image"
        src={`../../public/images/${props.item.coverImg}`}
        alt="katie"
      ></img>
      <div className="cstats">
        <img className="card-star" src={star} alt="star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="greyc">({props.item.stats.reviewCount}) .</span>
        <span className="greyc">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bld">From ${props.item.price}</span> / Person
      </p>
    </div>
  );
}
