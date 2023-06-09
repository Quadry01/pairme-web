
import "./AccomondationInfo.css";
import RoommateInfo from "../RoommateInfo/RoommateInfo";
import { AiFillCar } from "react-icons/ai";
import { BiCycling } from "react-icons/bi";
import { GiWalk } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";

const AccomodationInfo = ({ accommodateInfo, hideaccom, setHaccom, hideroom, setHroom }) => {

  const AccomHandler = (e) => {
    e.preventDefault();
    setHroom("hidden");
    setHaccom("");
  };

  const RoomHandler = (e) => {
    e.preventDefault();
    setHroom("");
    setHaccom("hidden");
  };
  return (
    <div>
      <div className="switch">
        <button className={`underline ${hideaccom==='hidden'? 'text-gray-400': 'text-blue'}`} onClick={AccomHandler}>
          Accommodation
        </button>
        <button className={`underline ml-4 ${hideroom==='hidden'? 'text-gray-400': 'text-blue'}`} onClick={RoomHandler}>
          Roommate
        </button>
      </div>
      <div className={`accomondation-card-container ${hideaccom} `}>
        <>
          <h1 className="accomodation-main-header text-2xl font-bold">
            {accommodateInfo?.type}
          </h1>
          <div className="grid-container">
            <div className="grid-img1"></div>
            <div className="grid-img2"></div>
            <div className="grid-img3"></div>
            <div className="grid-img4"></div>
          </div>
          <div>
            <h5 className="accomodation-header">Overview</h5>
            <p className="overview sm:text-sm text-justify">
              {accommodateInfo?.overview}
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
              <span className="accom-span1">
                {accommodateInfo?.distance.map((i) => i.driving)} min
              </span>
            </label>
            <label className="label2">
              <BiCycling className="accom-icon2" />{" "}
              <span className="accom-span2">
                {accommodateInfo?.distance.map((i) => i.cycling)} min
              </span>
            </label>
            <label className="label3">
              <GiWalk className="accom-icon3" />{" "}
              <span className="accom-span3">
                {accommodateInfo?.distance.map((i) => i.trekking)} min
              </span>
            </label>
            <label className="label4">
              <FaRoad className="accom-icon4" />{" "}
              <span className="accom-span4">to main road</span>
            </label>
          </div>

          <div className="flex md:flex-col md:mb-6 pt-4 md:pt-0 gap-4 md:gap-0">
            <div className="w-6/12 md:w-full flex flex-col md:flex-row md:max-h-12 md:mt-4">
              <div className="md:w-[20%] font-bold md:text-lg">
                {" "}
                Features{" "}
              </div>
              <div className="text-xs md:text-sm pl-1 md:pl-11 w-full flex flex-col flex-wrap">
                {accommodateInfo?.features.map((i) => (
                  <li className="md:w-6/12">{i}</li>
                ))}
              </div>
            </div>

            <div className=" w-6/12 md:w-full flex flex-col md:flex-row md:max-h-12 md:mt-4">
              <div className="md:w-[20%] font-bold md:text-lg">
                {" "}
                Rules and Regulations{" "}
              </div>
              <div className="text-xs md:text-sm pl-1 md:pl-8 w-full flex flex-col flex-wrap">
                {accommodateInfo?.hostelregulations.map((i) => (
                  <li className="md:w-6/12">{i}</li>
                ))}
              </div>
            </div>
          </div>

          <button className="accom-btn">Contact</button>
        </>
      </div>
      <div className={`${hideroom}`}>
        <RoommateInfo 
        accommodateInfo={accommodateInfo}
        />
      </div>
    </div>
  );
};

export default AccomodationInfo;
