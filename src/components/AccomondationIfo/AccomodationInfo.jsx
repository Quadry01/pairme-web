import React from "react";
import "./AccomondationInfo.css";
import { AiFillCar } from "react-icons/ai";
import { BiCycling } from "react-icons/bi";
import { GiWalk } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";

const AccomodationInfo = () => {
  return (
    <div className="accomondation-card-container">
      <>
        <h1 className="accomodation-main-header text-2xl">Self Contain</h1>
        <div className="grid-container">
          <div className="grid-img1">1</div>
          <div className="grid-img2">2</div>
          <div className="grid-img3">3</div>
          <div className="grid-img4">4</div>
        </div>
        <div>
          <h5 className="accomodation-header">Overview</h5>
          <p className="sm:w-full text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            debitis, accusantium provident incidunt laboriosam natus commodi
            vero inventore quas sint just a sample text.
          </p>
        </div>
        <div>
          <h5 className="accomodation-header">Location</h5>
          <iframe
            className="iframe-map sm:w-full m-0 p-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.046772803073!2d3.387269774665151!3d6.515764323253908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1682168559663!5m2!1sen!2sng"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="label-container">
          <label className="label1">
            <AiFillCar className="accom-icon1" />{" "}
            <span className="accom-span1">5 min</span>
          </label>
          <label className="label2">
            <BiCycling className="accom-icon2" />{" "}
            <span className="accom-span2">10 min</span>
          </label>
          <label className="label3">
            <GiWalk className="accom-icon3" />{" "}
            <span className="accom-span3">15 min</span>
          </label>
          <label className="label4">
            <FaRoad className="accom-icon4" />{" "}
            <span className="accom-span4">to main road</span>
          </label>
        </div>
        <div className="feature-rules-div">
          <div className="feature-section">
            <h5 className="feature-header">Features</h5>
            <ul className="feature-list1">
              <li className="li">Tiled</li>
              <li className="li">24hrs Power supply</li>
              <li className="li">Tight Security</li>
              <li className="li">Running Water</li>
              <li className="li">Furnished Kitchen</li>
              <li className="li">Standard wardrobe</li>
            </ul>
            <ul className="feature-list2">
              <li className="li">Tiled</li>
              <li className="li">24hrs Power supply</li>
              <li className="li">Tight Security</li>
              <li className="li">Running Water</li>
              <li className="li">Furnished Kitchen</li>
              <li className="li">Standard wardrobe</li>
            </ul>
          </div>
          <div className="rules-section">
            <h5 className="rule-header">
              Rules and <br className="rm-br" /> Regulations
            </h5>
            <ul className="rules-list1">
              <li className="li">No Entry after 10:00pm</li>
              <li className="li">Rent must be paid before due date</li>
              <li className="li">No Entry after 10:00pm</li>
              <li className="li">Rent must be paid before due date</li>
              <li className="li">No Entry after 10:00pm</li>
              <li className="li">Rent must be paid before due date</li>
            </ul>
          </div>
        </div>
        <button className="accom-btn">Contact</button>
      </>
    </div>
  );
};

export default AccomodationInfo;
