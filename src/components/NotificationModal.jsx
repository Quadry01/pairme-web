import { useStateContext } from "../context/contextProvider";
import {FaChevronDown}from 'react-icons/fa';
export const NotificationModal = () => {
  const { userModal, setUserModal } = useStateContext();

  const handleClose = (e) => {
    if (e.target.id === "container") setUserModal(false);
  };

  const notifyText = [
    "This is to inform you that Aflix hostel is still available for accommodation",
    "This is to inform you that FineTouch hostel is still available for accommodation",
    "This is to inform you that Greenville hostel is still available for accommodation",
    "This is to inform you that SHG hostel is still available for accommodation",
  ];

  if (!userModal) return null;
  return (
    <div
      id="container"
      onClick={handleClose}
      className="inset-0 fixed bg-black z-50 bg-opacity-30"
    >
      <div className="absolute md:bottom-1/4 md:left-1/4 bottom-2/4 left-2/4 md:w-72 rounded-2xl overflow-hidden text-gray-500 text-xs bg-white">
        <div className="bg-gray-500 w-full h-10 px-5 flex justify-between items-center text-white"><span className="my-auto ">Notifications</span><span><FaChevronDown/></span></div>
        <ul className="list-none divide-y">
          {notifyText.map((item, i) => (
            <li
              className="px-4 h-12 flex items-center justify-between w-full hover:cursor-pointer hover:bg-slate-100"
              key={i}
            >
              <span className="w-9/12 text-ellipsis">
                {item.length > 30 ? `${item.substring(0, 30)}...` : item}
              </span>
              <span>9:52 am</span>
            </li>
          ))}
        </ul>


      </div>
    </div>
  );
};
