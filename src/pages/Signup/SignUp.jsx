import { Footer } from "../../components/Footer";
import "./Signup.css";
import Personalinfo from "./Personalinfo";
import AccomondationInfo from "./AccomondationInfo";
import AccomondationInfo2 from "./AccomondationInfo2";
import { useState } from "react";
import top_img from "../../images/Rectangle.png";

export const SignUp = () => {
  const [hide, setHide] = useState("hidden");
  const [show, setShow] = useState("show");

  const FirstbtnHandler = (e) => {
    setHide("hidden");
    setShow("");
    e.preventDefault();
  };
  const SecondbtnHandler = (e) => {
    setHide("");
    setShow("show");
    e.preventDefault();
  };
  return (
    <div className="w-full md:bg-red h-full">
      <div className="img-border-container">
        <img className="border-img" src={top_img} alt="border"></img>
      </div>
      <section className="form-container">
        <form className="need-roomate">
          <div className="roommate-head-div">
            <h1 className="rm-header">Roommates</h1>
            <p className="rm-paragraph">
              Find your perfect match and share your University experience with
              the right roomate
            </p>
          </div>

          <button onClick={FirstbtnHandler} className="top-btn1">
            I Need a Roommate
          </button>
          <button onClick={SecondbtnHandler} className="top-btn2">
            I Need a Accomondation
          </button>
          <Personalinfo />
          <AccomondationInfo className={show} />
          <AccomondationInfo2 className={hide} />
        </form>
        <form className="need-accommondation"></form>
        <button className="submit-btn">Sign up</button>
      </section>
      <Footer className="footer-layer-effect" />
    </div>
  );
};
