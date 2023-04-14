import { useStateContext } from "../context/contextProvider";
import {FaChevronDown} from 'react-icons/fa';
import {IoMdThumbsUp} from 'react-icons/io'
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotifyData } from "../data/NotificatioData";

export const NotificationModal = () => {
  const { userModal, setUserModal } = useStateContext();
  const [notifyDetail, setNotifyDetail] = useState(false)
  const [notifyText, setNotifyText] = useState(null)

  const handleClose = (e) => {
    if (e.target.id === "container") setUserModal(false);
  };
  const closeNotifyDetail = (e) =>{
    if (e.target.id ==='notifyDetail') setNotifyDetail(false)
    setNotifyText(null)
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
          {NotifyData.map(({id, text}) => 
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
        </ul>
      </div>
      

      { notifyDetail ===true ? 
        (<div  onClick={closeNotifyDetail} id="notifyDetail" className="inset-0 fixed bg-black z-120 bg-opacity-30 flex items-center justify-center">
            <div className="bg-white text-blue pb-8 md:pb-[120px] w-60 mt-8 md:mt-0 md:w-[33.3%] h-auto rounded-lg md:rounded-3xl px-7 absolute">
              <div className="text-3xl md:text-8xl flex justify-center mt-12 md:mt-28"><IoMdThumbsUp/></div><br />
              <div className="text-xs md:text-base text-center">{notifyText}</div>
              <div className="flex justify-center"><Link to='/payment'><button className="rounded-full mt-6 text-white bg-blue text-center text-xxs md:text-sm  h-6 md:h-14 w-36 md:w-64 ">proceed to payment </button></Link></div>
            </div>
      </div>) : null
      
      }

    </div>
  );
};
