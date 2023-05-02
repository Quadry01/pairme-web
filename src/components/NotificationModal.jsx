import { useStateContext } from "../context/contextProvider";
import {FaChevronDown} from 'react-icons/fa';
import { FaThumbsUp} from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotifyData, NotifyData2 } from "../data/NotificatioData";
import {MdWavingHand} from 'react-icons/md'

export const NotificationModal = () => {
  const { userModal, setUserModal,userStatus  } = useStateContext();
  const [notifyDetail, setNotifyDetail] = useState(false)
  const [notifyText, setNotifyText] = useState(null)

  const handleClose = (e) => {
    if (e.target.id === "container") setUserModal(false);
  };
  const closeNotifyDetail = (e) =>{
    if (e.target.id ==='notifyDetail') setNotifyDetail(false)
  }
  
   
  const handleText =(text)=>{
    setNotifyDetail(true)
    setNotifyText (text)
  }


  if (!userModal) return null;
  return (
    
    <div
      id="container"
      onClick={handleClose}
      className="inset-0 fixed flex bg-black z-100 bg-opacity-30"
    >
      <div className="absolute left-[15%] md:left-1/4 md:bottom-1/4 bottom-1/4 w-64 md:w-72 rounded-lg md:rounded-2xl overflow-hidden text-gray-500 text-xxs md:text-xs bg-white">
        <div className="bg-gray-500 w-full h-14 px-3 md:px-5 flex justify-between items-center text-white"><span className="my-auto ">Notifications</span><span><FaChevronDown/></span></div>
        <ul className="list-none divide-y">
          {userStatus ==="findingRoommate" && NotifyData.map(({id, text}) => 
            <li
              onClick={()=>handleText(text)}
              className="px-2 md:px-4 h-16 flex items-center justify-between w-full hover:cursor-pointer hover:bg-slate-100"
              key={id}
            >
              <span className="w-9/12">
                {text.length > 20 ? `${text.substring(0, 30)}...` : text}
              </span>
              <span>9:52 am</span>
            </li>
          )
        }

        {userStatus ==="findingAccommodation" && NotifyData2.map(({id, text}) => 
            <li
              onClick={()=>handleText(text)}
              className="px-2 md:px-4 h-16 flex items-center justify-between w-full hover:cursor-pointer hover:bg-slate-100"
              key={id}
            >
              <span className="w-9/12">
                {text.length > 20 ? `${text.substring(0, 25)}...` : text}
              </span>
              <span>9:52 am</span>
            </li>
          )
        }     
        </ul>
      </div>
      

      { notifyDetail ===true ? 
        (<div  onClick={closeNotifyDetail} id="notifyDetail" className="inset-0 fixed bg-black z-120 bg-opacity-30 flex items-center justify-center">
            <div className="bg-white text-blue pb-8 md:pb-[120px] w-60 mt-8 md:mt-0 md:w-[33.3%] h-auto rounded-lg md:rounded-3xl px-7 absolute">
              <div className="text-gray-700 md:text-blue text-3xl md:text-8xl flex justify-center mt-12 md:mt-28">
                {notifyText.includes('available') && <FaThumbsUp/>}
                {notifyText.includes('waved') && <MdWavingHand/>}
              </div>
              <div className="text-xs md:text-base text-center mt-3 md:mt-4">{notifyText}</div>
              {userStatus==="findingRoommate" && <div className="flex justify-center"><button className="rounded-full mt-6 text-white bg-blue text-center text-xxs md:text-sm  h-6 md:h-14 w-36 md:w-64 ">Check profile </button></div>}
              {(userStatus==="findingAccommodation" && notifyText.includes('waved')) && <div className="flex justify-center"><button className="rounded-full mt-6 text-white bg-blue text-center text-xxs md:text-sm  h-6 md:h-14 w-36 md:w-64 ">Check profile </button></div>}
              {(userStatus==="findingAccommodation" && notifyText.includes('available')) && <div className="flex justify-center"><Link to ="/payment"><button className="rounded-full mt-6 text-white bg-blue text-center text-xxs md:text-sm  h-6 md:h-14 w-36 md:w-64 ">Make payment </button></Link></div>}
            </div>
      </div>) : null
      
      }

    </div>
  );
};
