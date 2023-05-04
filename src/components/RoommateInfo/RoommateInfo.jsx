import React from "react";
import "./RoommateInfo.css";
import { CgProfile } from "react-icons/cg";


const RoommateInfo = ({accommodateInfo}) => {
  return (
    <div className="roommate-info-wrapper">
      <div className="picture-name-section">
        <div className="roommate-profile-picture">
          <CgProfile className="dp-icon" />
        </div>
        <div className="smallScreen-name-sec">
          <h3 className="student-name">{accommodateInfo?.linkedroommate.map(i=>i.name)}</h3>
          <span className="university-name">{accommodateInfo?.linkedroommate.map(i=>i.university)}</span> <br />
          <span className="course-of study">{accommodateInfo?.linkedroommate.map(i=>i.department)}</span>
        </div>
      </div>
      <div className="about-section">
        <h3 className="about-header">About</h3>
        <p>
        {accommodateInfo?.linkedroommate.map(i=>i.about)}
        </p>

        <div className="religion-section">
          <div className="religion">
            <h3 className="about-header">Religion</h3>
            <span>{accommodateInfo?.linkedroommate.map(i=>i.religion)}</span>
          </div>
          <div className="side-hustle">
            <h3 className="about-header">Side Hustle</h3>
            <span>{accommodateInfo?.linkedroommate.map(i=>i.sideHustle)}</span>
          </div>
        </div>
        <div className="about2">
          <h3 className="about-header">Schedule/Routine</h3>
          <p>
          {accommodateInfo?.linkedroommate.map(i=>i.routine)}
          </p>
          <h3 className="about-header">Hobbies</h3>
          <div>
          {accommodateInfo?.linkedroommate.map(i=>i.hobbies.map(item => 
          <li className="about-li">
            {item}
          </li>))}
            {/* <li className="about-li">Reading</li>
            <li className="about-li">writing</li>
            <li className="about-li">Volunteering</li> */}
          </div>
        </div>
      </div>
      <button className="roomate-btn">Contact</button>
    </div>
  );
};

export default RoommateInfo;
