import React from "react";
import { RiImageAddFill } from "react-icons/ri";
import { useState } from "react";
import "./Signup.css";
const AccomondationInfo = ({ className }) => {
  const [hostelDes, setHostelDes] = useState("");
  const [furnishDes, setFurnishDes] = useState("");
  return (
    <div className={className}>
      <div className="Accomondation-information">
        <h6>Hostel Information</h6>
        <input
          className="Hostel-Address"
          type="text"
          placeholder="Hostel Address"
        ></input>
        <select className="accomondation-type" name="hostel-type">
          <optgroup>
            <option disabled selected hidden value="">
              Accomondation Type
            </option>
            <option value="duplex">Duplex</option>
            <option value="self-con">Self contain</option>
            <option value="one-room">One room</option>
          </optgroup>
        </select>

        <input className="hostel-rent" type="text" placeholder="Rent"></input>

        <textarea
          className="hostel-description"
          type="text"
          value={hostelDes}
          onChange={(e) => setHostelDes(e.target.value)}
          placeholder="Hostel Description eg Amenities, Proximity, Security"
        ></textarea>

        <textarea
          className="furnish-description"
          type="text"
          value={furnishDes}
          onChange={(e) => setFurnishDes(e.target.value)}
          placeholder="Furnishes and Appliances if Included"
        ></textarea>
        <label className="dispay-picture-tag">
          <RiImageAddFill className="img-icon" /> Hostel Pictures{" "}
          <input
            className="profile-picture"
            type="file"
            name="Hostel-picture"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default AccomondationInfo;
