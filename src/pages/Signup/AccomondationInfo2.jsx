import React from "react";
import { useState } from "react";

const AccomondationInfo2 = ({ className }) => {
  const [budget, setBudget] = useState("");
  return (
    <div className={className}>
      <div className="Accomondation-information">
        <h6>Hostel Information</h6>

        <select className="prefered-location" name="prefered-location">
          <optgroup>
            <option disabled selected hidden value="">
              Prefered Location
            </option>
            <option value="lagos">Lagos</option>
            <option value="akure">Akure</option>
            <option value="ogun">Ogun</option>
            <option value="oyo">Oyo</option>
          </optgroup>
        </select>
        <input
          className="budget-input"
          type="text"
          value={budget}
          onClick={(e) => setBudget(e.target.value)}
          placeholder="Budget for rent"
        ></input>
        <select
          className="Prefered-accomondation"
          name="Prefered-accomondation"
        >
          <optgroup>
            <option disabled selected hidden value="">
              Prefered accomondation type
            </option>
            <option value="lagos">one man room</option>
            <option value="akure">two man room</option>
            <option value="ogun">three man room</option>
            <option value="oyo">four man room</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default AccomondationInfo2;
