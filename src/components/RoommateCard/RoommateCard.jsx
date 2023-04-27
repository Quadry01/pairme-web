import React from "react";
import "./RoommateCard.css";
import { FaPrayingHands } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import accom from "../../images/accom.png";
const RoommateCard = ({name, department, religion, height, nameText, cardText}) => {
  return (
        <div className={`${height} roommate-card-wrapper shadow-sm md:shadow-md text-gray-700 bg-white`}>
          <div className="img-div">
            {" "}
            <img src={accom} alt="imag" />
          </div>
          <div className={` h-full flex flex-col details ${cardText}`}>
            <h2 className= {`${nameText}`}>{name.length > 13 ? `${name.substring(0, 13)}` : name}</h2>
            <h5 className="course">
              <BsBook className="roomate-card-icon" />
              {department.length > 25 ? `${department.substring(0, 25)}` : department}
            </h5>
            <h5 className="religion">
              <FaPrayingHands className="roomate-card-icon" /> {religion}
            </h5>
          </div>
        </div>
  );
};

export default RoommateCard;
