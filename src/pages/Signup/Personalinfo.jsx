import React from "react";
import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import "./Signup.css";

const Personalinfo = () => {
  const [name, setName] = useState("");
  const [selfDesription, setSelfDescription] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [schedule, setSchedule] = useState("");
  const [roomateDes, setroomateDes] = useState("");
  return (
    <div>
      <form className="personal-info">
        <h6>Personal Information</h6>
        <input
          className="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        ></input>
        <select className="school-drpdwn" name="school">
          <optgroup>
            <option disabled selected hidden value="">
              School
            </option>
            <option value="unilag">Unilag</option>
            <option value="ui">UI</option>
            <option value="unijos">Unijos</option>
            <option value="uniben">Uniben</option>
            <option value="lasu">Lasu</option>
          </optgroup>
        </select>
        <select className="department-drpdwn" name="Department">
          <optgroup>
            <option disabled selected hidden value="">
              Department
            </option>
            <option value="Economics">Economics</option>
            <option value="sociology">Sociology</option>
            <option value="micro-biology">Micro Biology</option>
            <option value="botany">Botany</option>
            <option value="law">Law</option>
          </optgroup>
        </select>
        <input
          className="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        ></input>
        <select className="gender-drpdwn" name="gender">
          <optgroup>
            <option disabled selected hidden value="">
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">female</option>
          </optgroup>
        </select>
        <input
          className="date-input"
          type="date"
          value="date-of-birth"
          placeholder="Date of Birth"
        ></input>

        <label className="dispay-picture-tag">
          <RiImageAddFill className="img-icon" /> Display Picture
          <input
            className="profile-picture"
            type="file"
            name="display-picture"
          ></input>
        </label>
        <select className="side-hustle-drpdwn" name="side-hustle">
          <optgroup>
            <option disabled selected hidden value="">
              Side Hustle
            </option>
            <option value="one">Web developer</option>
            <option value="two">fashion Designer</option>
            <option value="three">Photography</option>
            <option value="four">fire fighter</option>
          </optgroup>
        </select>
        <textarea
          className="self-description-input"
          type="text"
          value={selfDesription}
          maxLength={250}
          onChange={(e) => setSelfDescription(e.target.value)}
          placeholder="Brief Description of yourself"
        ></textarea>
        <textarea
          className="hobbie-input"
          type="text"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          placeholder="Hobbies/Interests"
        ></textarea>
        <textarea
          className="schedule-input"
          type="text"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          placeholder="Schedule and Routine"
        ></textarea>
        <textarea
          className="ideal-roomate-input"
          type="text"
          value={roomateDes}
          onChange={(e) => setroomateDes(e.target.value)}
          placeholder="Describe your Ideal roomate"
        ></textarea>
      </form>
    </div>
  );
};

export default Personalinfo;
