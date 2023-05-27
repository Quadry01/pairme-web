import React from "react";
import "./AccomodationCard.css";
import { MdLocationPin } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import accom from "../../images/accom.png";

const AccomodationCard = ({height, nameText, cardText, payText, location, yearlyrent, type}) => {
  const capLocation = location.split(' ').map(i=>i.charAt(0).toUpperCase()+ i.slice(1)).join(' ');
  const capType = type.split(' ').map(i=>i.charAt(0).toUpperCase()+ i.slice(1)).join(' ');

  return (
    <div className={`${height} accomodation-card-wrapper shadow-sm md:shadow-md text-gray-700 bg-white`}>
      <div className="accomodation-img-div">
        <img src={accom} alt="hostel"></img>
      </div>
      <div className={`${cardText} h-full flex flex-col`}>
        <h1 className={`${nameText}`}>Hostel</h1>
        <h2>
          <BsHouseFill className="accomodation-card-icon" />
          {capType}
        </h2>
        <h2>
          <MdLocationPin className="accomodation-card-icon" />{capLocation.length > 15 ? `${capLocation.substring(0, 15)}...` : capLocation}
        </h2>
        <h2 className={`${payText}`}>₦{new Intl.NumberFormat().format(yearlyrent)}/year</h2>
      </div>
    </div>
  );
};

export default AccomodationCard;
