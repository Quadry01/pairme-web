import React from "react";
import "./AccomodationCard.css";
import { MdLocationPin } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import accom from "../../images/accom.png";

const AccomodationCard = () => {

  return (
    <div className="accomodation-card-wrapper h-52 md:h-72 shadow-sm md:shadow-md">
      <div className="accomodation-img-div">
        <img src={accom} alt="hostel"></img>
      </div>
      <div className="accomodation-details md:text-sm text-xxs ">
        <h1 className="accomodation-name text-sm md:text-lg"> Aflix Hostel</h1>
        <span className="accomodation-type">
          <BsHouseFill className="accomodation-card-icon" />
          Self Contain
        </span>
        <br />
        <span className="accomodation-location">
          <MdLocationPin className="accomodation-card-icon" /> Mayfair
        </span> <br/>
        <span className="accomodation-price  text-sm md:text-lg"> £75,000/year</span>
      </div>
    </div>
  );
};

export default AccomodationCard;
