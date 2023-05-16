import React from "react";
import "./AccomodationCard.css";
import { MdLocationPin } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import accom from "../../images/accom.png";

const AccomodationCard = ({height, nameText, cardText, payText, location, yearlyrent, type}) => {

  return (
    <div className={`${height} accomodation-card-wrapper shadow-sm md:shadow-md text-gray-700 bg-white`}>
      <div className="accomodation-img-div">
        <img src={accom} alt="hostel"></img>
      </div>
      <div className={`${cardText} h-full flex flex-col`}>
        <h1 className={`${nameText}`}>Hostel</h1>
        <h2>
          <BsHouseFill className="accomodation-card-icon" />
          {type}
        </h2>
        <h2>
          <MdLocationPin className="accomodation-card-icon" /> {location.length > 15 ? `${location.substring(0, 15)}...` : location}
        </h2>
        <h2 className={`${payText}`}> ₦{new Intl.NumberFormat().format(yearlyrent)}/year</h2>
      </div>
    </div>
  );
};

export default AccomodationCard;
