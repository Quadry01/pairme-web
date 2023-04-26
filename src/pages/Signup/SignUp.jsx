import { Footer } from "../../components/Footer";
import { useState } from "react";
import "./Signup.css";
import { RiImageAddFill } from "react-icons/ri";
import top_image from "../../images/Rectangle.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/contextProvider";
import RoommateInfo from "../../components/RoommateInfo/RoommateInfo";
import AccomodationInfo from "../../components/AccomondationIfo/AccomodationInfo";

export const SignUp = () => {
  const roomateParagraph =
    " Find your perfect match and share your University experience with the right roomate";
  const accomondationParagraph =
    "Discover your ideal 'home away from home'with our afordable & student-friendly range of accommodation options";
  const roomateHeader = "Roommates";
  const accomondationHeader = "Accommodations";

  const [name, setName] = useState("");

  const [sideHustle, setSidHustle] = useState("");
  const [dob, setDob] = useState("");
  const [selfDesription, setSelfDescription] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [roomateDes, setroomateDes] = useState("");
  const [department, setDepartment] = useState("");

  const [budget, setBudget] = useState("");
  const [roommate_section, SetRoomate_section] = useState("");
  const [accomondation_section, SetAccomondation_section] = useState("hide");
  const [form_hearder, SetForm_header] = useState("Roomates");
  const [form_paragraph, SetForm_paragraph] = useState(
    "Find your perfect match and share your University experience with the right roomate"
  );
  const [bg, setBg] = useState("bg");
  const [bg1, setBg1] = useState("");
  const navigate = useNavigate();
  const { setUser, userStatus, setUserStatus } = useStateContext();

  const RoommateHandler = (e) => {
    e.preventDefault();
    SetForm_header(roomateHeader);
    SetForm_paragraph(roomateParagraph);
    SetAccomondation_section("hide");
    SetRoomate_section("");
    setUserStatus("findingRoommate");
    setBg("bg");
    setBg1("");
  };
  const AccomondationHandler = (e) => {
    e.preventDefault();
    SetForm_header(accomondationHeader);
    SetForm_paragraph(accomondationParagraph);
    SetAccomondation_section("");
    SetRoomate_section("hide");
    setUserStatus("findingAccommodation");
    setBg1("bg");
    setBg("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
      name,
      selfDesription,
      email,
      hobbies,
      roomateDes,
      budget,
      status: userStatus,
    });
    navigate("/user");
  };

  return (
    <div className="">
      <div className="top-image-div">
        <img src={top_image} alt="top-img" />
      </div>
      <section className="form-container">
        <form onSubmit={(e) => handleFormSubmit} className="need-roomate">
          <div className="roommate-head-div">
            <h1 className="form-header">{form_hearder}</h1>
            <p className="form-paragraph">{form_paragraph}</p>
          </div>

          <button onClick={RoommateHandler} className={`top-btn1 ${bg}`}>
            I Need A Roommate
          </button>
          <button onClick={AccomondationHandler} className={`top-btn2 ${bg1}`}>
            I Need An Accommodation
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
              </optgroup>
            </select>

            <input
              className="department-drpdwn"
              name="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
            ></input>
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

            <label>
              <span className={`date-of-birth ${dob}`}>Date of Birth</span>
              <input
                className="date-input hide-date"
                type="date"
                name="date-of-birth"
              ></input>
            </label>
            <label className="dispay-picture-tag">
              <RiImageAddFill className="img-icon" /> Display Picture
              <input
                className="profile-picture"
                type="file"
                name="display-picture"
              ></input>
            </label>

            <input
              className="side-hustle-drpdwn"
              type="text"
              value={sideHustle}
              placeholder="Side Hustle"
              onChange={(e) => {
                setSidHustle(e.target.value);
              }}
            ></input>

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
                <option value="Studio-Apartment">Studio Apartment</option>
                <option value="two-room">2 Bedroom Apartmrnt</option>
                <option value="one-room">3 Bedroom Apaertment</option>
              </optgroup>
            </select>

            <input
              className="hostel-rent"
              type="text"
              placeholder=" Full Rent"
            ></input>

            <select className="furnish-description" name="furnish-description">
              <optgroup>
                <option disabled selected hidden value="">
                  Furnishes
                </option>
                <option value="Studio-Apartment">Air Conditional</option>
                <option value="two-room">Television</option>
                <option value="one-room">Water closet</option>
              </optgroup>
            </select>

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
                <option value="chemis">Chemist</option>
                <option value="pako">Pako</option>
                <option value="cms-grammar-school">CMS Grammar School</option>
                <option value="dad-street">Dada Street</option>
                <option value="anu/police-station">
                  Anuoluwapo/Police Station
                </option>
                <option value="ilaje">Ilaje</option>
                <option value="abeokuta-street">Abeokuta Street</option>
              </optgroup>
            </select>
            <input
              className="budget-input"
              type="text"
              value={budget}
              placeholder="Rent Budget"
              onChange={(e) => setBudget(e.target.value)}
            ></input>
            <select
              className="preffered-accomondation"
              name="prefered-accomondation-type"
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
          <button
            onClick={handleFormSubmit}
            className="submit-btn"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </section>
      {/* <AccomodationInfo /> */}
      {/* <RoommateInfo/> */}
      <Footer className="footer-layer-effect" />
    </div>
  );
};
