import { useStateContext } from "../context/contextProvider";
import { HiUser } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

export const UserProfileModal = () => {
  const { profileModal, setProfileModal } = useStateContext();
  const handleClose = (e) => {
    if (e.target.id === "container") setProfileModal(false);
  };

  return (
    <>
      {profileModal ? (
        <div
          onClick={handleClose}
          id="container"
          className="inset-0 fixed bg-black z-50 bg-opacity-30"
        />
      ) : null}

      <div
        className={`z-100 ${
          profileModal === false
            ? "translate-y-full md:translate-y-0 md:hidden"
            : "translate-y-0"
        } ease-in-out duration-300 fixed h-[70%] w-full md:h-[92%] bottom-0 md:bottom-[4%] md:left-[30%]  md:w-[45%] rounded-t-2xl md:rounded-3xl bg-white`}
      >
        <div className="text-xxs md:text-xs px-6 md:px-16 pt-6 md:pt-12 w-full text-blue flex flex-col">
          <div className=" text-2xl md:text-5xl mx-auto w-16 h-16 md:w-24 md:h-24 rounded-full ring-4 md:ring-6 ring-gray-400 flex items-center justify-center">
            <HiUser />
          </div>
          <div className="text-center mt-6 text-base md:text-xl font-medium ">Adekunle Simeon</div>
          <div className="text-center mt-1">University of Lagos</div>
          <div className="text-center mt-1">Computer Science</div>
          <div className="flex flex-col gap-y-4 mt-4">
            <div>
              <span className="text-xs md:text-sm font-medium">About</span>
              <br />
              <div className="md:leading-6">
                Adekunle is a highly motivated computer science student with a
                passion for coding and problem-solving. He is always eager to
                learn new programming languages and improve his skills.
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-xs md:text-sm font-medium">Religion</span>
                <br />
                <span>Christian</span>
              </div>
              <div>
                <span className="text-xs md:text-sm font-medium">Side Hustle</span>
                <br />
                <span>Freelance Web Developer</span>
                <br />
              </div>
            </div>
            <div>
              <span className="text-xs md:text-sm font-medium">Schedule/Routine</span>
              <br />
              <span className="md:leading-6">
                Adekunle wakes up at 6am every day, attends classes from 8am to
                3pm, works on his freelance projects from 4pm to 7pm, plays
                football in the evening and reads before going to bed.
              </span>
            </div>
            <div>
              <span className="text-xs md:text-sm font-medium">Hobbies</span>
              <br />
              <div className=" pl-2">
                <li>Football</li>
                <li>Reading</li>
                <li>Coding</li>
              </div>
            </div>
            <div
              span
              className="text-gray-500 font-medium text-center flex items-center justify-center"
            >
              <span>Edit Profile</span>{" "}
              <>
                <BsArrowRight />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
