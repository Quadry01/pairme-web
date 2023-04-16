import React from "react";
import "./RoommateCard.css";
import { FaPrayingHands } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import accom from "../../images/accom.png";
const RoommateCard = ({name, department, religion, height}) => {
  return (
        <div className={`${height} roommate-card-wrapper shadow-sm md:shadow-md`}>
          <div className="img-div">
            {" "}
            <img src={accom} alt="imag" />
          </div>
          <div className="details  md:text-sm text-xxs">
            <span className=" text-sm md:text-lg">{name}</span> <br />
            <span className="course">
              <BsBook className="roomate-card-icon" />
              {department}
            </span>
            <br />
            <span className="religion">
              <FaPrayingHands className="roomate-card-icon" /> {religion}
            </span>
          </div>
        </div>
  );
};

export default RoommateCard;
