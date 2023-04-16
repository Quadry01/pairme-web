import { Footer } from "../../components/Footer";
import { useState } from "react";
import "./Signup.css";
import { RiImageAddFill } from "react-icons/ri";
import top_image from "../../images/Rectangle.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/contextProvider";

export const SignUp = () => {
  const roomateParagraph =
    " Find your perfect match and share your University experience with the right roomate";
  const accomondationParagraph =
    "Discover your ideal 'home away from home'with our afordable & student-friendly range of accommodation options";
  const roomateHeader = "Roomates";
  const accomondationHeader = "Accommodations";

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [selfDesription, setSelfDescription] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [schedule, setSchedule] = useState("");
  const [roomateDes, setroomateDes] = useState("");
  const [hostelDes, setHostelDes] = useState("");
  const [furnishDes, setFurnishDes] = useState("");
  const [budget, setBudget] = useState("");
  const [roommate_section, SetRoomate_section] = useState("");
  const [accomondation_section, SetAccomondation_section] = useState("hide");
  const [form_hearder, SetForm_header] = useState("Roomates");
  const [form_paragraph, SetForm_paragraph] = useState(
    "Find your perfect match and share your University experience with the right roomate"
  );
  

  const navigate = useNavigate()
  const {setUser,userStatus, setUserStatus} = useStateContext()

  const RoommateHandler = (e) => {
    e.preventDefault();
    SetForm_header(roomateHeader);
    SetForm_paragraph(roomateParagraph);
    SetAccomondation_section("hide");
    SetRoomate_section("");
    setUserStatus('findingRoommate')
  };
  const AccomondationHandler = (e) => {
    e.preventDefault();
    SetForm_header(accomondationHeader);
    SetForm_paragraph(accomondationParagraph);
    SetAccomondation_section("");
    SetRoomate_section("hide");
    setUserStatus('findingAccommodation')
  };

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    setUser({name, dob, selfDesription, email, hobbies, schedule, roomateDes, furnishDes, budget, status:userStatus})
    navigate('/user')
  }

  return (
    <div className="">
      <div className="top-image-div">
        <img src={top_image} alt="top-img" />
      </div>
      <section className="form-container">
        <form onSubmit ={(e)=>handleFormSubmit} className="need-roomate">
          <div className="roommate-head-div">
            <h1 className="form-header">{form_hearder}</h1>
            <p className="form-paragraph">{form_paragraph}</p>
          </div>

          <button onClick={RoommateHandler} className="top-btn1">
            I Need a Roommate
          </button>
          <button onClick={AccomondationHandler} className="top-btn2">
            I Need a Accommodation
          </button>
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
              className="date-input hide-date"
              type="text"
              value={dob}
              placeholder="Date of Birth"
              onChange={(e) => {
                setDob(e.target.value);
              }}
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
          <div className={`Accomondation-information ${roommate_section}`}>
            <h6>Hostel Information</h6>
            <input
              className="Hostel-Address"
              type="text"
              placeholder="Hostel Address"
            ></input>
            <select className="accomondation-type" name="hostel-type">
              <optgroup>
                <option disabled selected hidden value="">
                  Accommodation Type
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
          </div>
          <div className={`need-accommondation ${accomondation_section}`}>
            <h6>Accommodation Information</h6>
            <select className="preffered-location" name="preffered-location">
              <optgroup>
                <option disabled selected hidden value="">
                  Preffered location
                </option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="ogun">Ogun</option>
              </optgroup>
            </select>
            <input
              className="budget-input"
              type="text"
              value={budget}
              placeholder="Budget for Rent"
              onChange={(e) => setBudget(e.target.value)}
            ></input>
            <select
              className="preffered-accomondation"
              name="preffered-accomondation-type"
            >
              <optgroup>
                <option disabled selected hidden value="">
                  Preffered Accommodation type
                </option>
                <option value="one">one room</option>
                <option value="two">two rooms</option>
                <option value="three">three rooms</option>
              </optgroup>
            </select>
          </div>
          <button onClick={handleFormSubmit} className="submit-btn" type="submit">Sign up</button>
        </form>
      </section>
      <Footer className="footer-layer-effect" />
    </div>
  );
};
