import React from "react";
import "./RoommateInfo.css";

const RoommateInfo = () => {
  return (
    <div className="roommate-info-wrapper">
      <div className="picture-name-section">
        <div className="profile-picture"></div>
        <div className="smallScreen-name-sec">
          <h3 className="student-name">Fatima Ahmed</h3>
          <span className="university-name"> Uinversity of Lagos</span> <br />
          <span className="course-of study">Pharmacy</span>
        </div>
      </div>
      <div className="about-section">
        <h3 className="about-header">About</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          expedita maxime fuga alias esse omnis iste porro doloribus
          perspiciatis sapiente.
        </p>

        <div className="religion-section">
          <div className="religion">
            <h3 className="about-header">Religion</h3>
            <span>Islam</span>
          </div>
          <div className="side-hustle">
            <h3 className="about-header">Side Hustle</h3>
            <span>Freelance Writer</span>
          </div>
        </div>
        <div className="about2">
          <h3 className="about-header">Schedule/Routine</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            expedita maxime fuga alias esse omnis iste porro doloribus
            perspiciatis sapiente.
          </p>
          <h3 className="about-header">Hobbies</h3>
          <ul>
            <li className="about-li">Reading</li>
            <li className="about-li">writing</li>
            <li className="about-li">Volunteering</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoommateInfo;
