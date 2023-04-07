import React from "react";
import "./AccomodationCard.css";
import { MdLocationPin } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import accom from "../../images/accom.png";

const AccomodationCard = () => {
  return (
    <div className="accomodation-card-wrapper">
      <div className="accomodation-img-div">
        <img src={accom} alt="hoste"></img>
      </div>
      <div className="accomodation-details">
        <h1 className="accomodation-name"> Aflix Hostel</h1>
        <span className="accomodation-type">
          <BsHouseFill className="accomodation-card-icon" />
          Self Contain
        </span>
        <br />
        <span className="accomodation-location">
          <MdLocationPin className="accomodation-card-icon" /> Mayfair
        </span>
        <span className="accomodation-price"> £75,000/year</span>
      </div>
    </div>
  );
};

export default AccomodationCard;
