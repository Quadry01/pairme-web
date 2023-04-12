import { Footer } from "../../components/Footer";
import { useState } from "react";
import "./Signup.css";
import { RiImageAddFill } from "react-icons/ri";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [selfDesription, setSelfDescription] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [schedule, setSchedule] = useState("");
  const [roomateDes, setroomateDes] = useState("");
  const [hostelDes, setHostelDes] = useState("");
  const [furnishDes, setFurnishDes] = useState("");

  return (
    <div className="">
      <section className="form-container">
        <form className="need-roomate">
          <div className="roommate-head-div">
            <h1>Roommates</h1>
            <p>
              Find your perfect match and share your University experience with
              the right roomate
            </p>
          </div>

          <button className="top-btn1">I Need a Roommate</button>
          <button className="top-btn2">I Need a Accomondation</button>
          <div className="personal-info">
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
          </div>
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

            <input
              className="hostel-rent"
              type="text"
              placeholder="Rent"
            ></input>

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
            <button className="submit-btn">Submit</button>
          </div>
        </form>
        <form className="need-accommondation"></form>
      </section>
      <Footer className="footer-layer-effect" />
    </div>
  );
};
