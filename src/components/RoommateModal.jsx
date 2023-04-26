import { useStateContext } from "../context/contextProvider";
import { HiUser } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

export const RoommateModal = ({roommateInfo}) => {
  const handleClose = (e) => {
    if (e.target.id === "container") setRoommateModal(!roommateModal);
  };
  const {setRoommateModal, roommateModal} = useStateContext()

  return (
    <>
      {!roommateModal ? (
        <div
          onClick={handleClose}
          id="container"
          className="inset-0 fixed bg-black z-50 bg-opacity-30"
        />
      ) : null}

      <div
        className={`z-100 ${
          roommateModal
            ? "translate-y-full md:translate-y-0 md:hidden"
            : "translate-y-0"
        } ease-in-out duration-300 fixed h-[70%] w-full md:h-[92%] bottom-0 md:bottom-[4%] md:left-[30%]  md:w-[45%] rounded-t-2xl md:rounded-3xl bg-white`}
      >
        <div className="text-xxs md:text-xs px-6 md:px-16 pt-6 md:pt-12 w-full text-blue flex flex-col">
          <div className=" text-2xl md:text-5xl mx-auto w-16 h-16 md:w-24 md:h-24 rounded-full ring-4 md:ring-6 ring-gray-400 flex items-center justify-center">
            <HiUser />
          </div>
          <div className="text-center mt-3 text-base md:text-xl font-medium ">{roommateInfo?.name}</div>
          <div className="text-center mt-1">{roommateInfo?.university}</div>
          <div className="text-center mt-1">{roommateInfo?.department}</div>
          <div className="flex flex-col gap-y-4 mt-4">
            <div>
              <span className="text-xs md:text-sm font-medium">About</span>
              <br />
              <div className="md:leading-6">
                {roommateInfo?.about}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-xs md:text-sm font-medium">Religion</span>
                <br />
                <span>{roommateInfo?.religion}</span>
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
                {roommateInfo?.routine}
              </span>
            </div>
            <div>
              <span className="text-xs md:text-sm font-medium">Hobbies</span>
              <br />
              <div className=" pl-2">
                {roommateInfo?.hobbies.map((item, i) =>
                    <li key={i}>{item}</li>
                )}
                {/* <li>Football</li>
                <li>Reading</li>
                <li>Coding</li> */}
              </div>
            </div>
            <div

              className="text-gray-500 font-medium text-center flex items-center justify-center"
            >
              <span className="w-full"><button className="bg-blue md:bg-blue-foundation md:text-blue text-white rounded-full w-full h-8 md:h-12">Contact</button></span>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
