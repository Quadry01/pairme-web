import { useStateContext } from "../context/contextProvider";
import { HiUser } from "react-icons/hi2";
import { useState } from "react";
import { FaThumbsUp} from 'react-icons/fa'

export const RoommateModal = ({roommateInfo}) => {
  const handleClose = (e) => {
    if (e.target.id === "container") setRoommateModal(!roommateModal);
  };

  const [showInterest, setShowInterest] = useState(false)
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
                <span>{roommateInfo?.sideHustle}</span>
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
                
              </div>
            </div>
            <div

              className="text-gray-500 font-medium text-center flex items-center justify-center"
            >
              <span className="w-full md:mt-3"><button onClick={()=>setShowInterest(true)} className="bg-blue md:bg-blue-foundation md:text-blue text-white rounded-full w-full h-8 md:h-12">Contact</button></span>
              
            </div>
          </div>
        </div>
      </div>

      {showInterest &&(
        <div onClick={(e)=> e.target.id ==='interest-container'? setShowInterest(!showInterest) : null} id='interest-container' className="inset-0 fixed bg-black z-120 bg-opacity-30 flex items-center justify-center">
          <div className="text-xxs md:text-xs px-5 md:px-10 gap-2 md:gap-3 flex flex-col items-center justify-center h-[28%] md:h-[43%] w-[24em] rounded-xl md:rounded-2xl bg-white text-blue">
            <div> <span className="bg-red text-4xl text-gray-700 md:text-blue md:text-7xl"><FaThumbsUp/></span></div>
            <div className="text-center leading-4 md:leading-6">{`You have successfully shown your interest in ${roommateInfo?.name.split(" ")[0]}. Continue your search 
              while you wait for a response.`}
            </div>
            <div>
              <button onClick={()=> {setShowInterest(false); setRoommateModal(true)}} className="rounded-full w-16 md:w-24 h-5 md:h-8 bg-blue text-white">Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
