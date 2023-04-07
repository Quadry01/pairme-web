import { useStateContext } from "../context/contextProvider";
import {BsArrowRight,BsBellFill} from 'react-icons/bs';
import {AiTwotoneHome} from 'react-icons/ai';
import {SiGooglechat} from 'react-icons/si';
import {IoMdSettings} from 'react-icons/io'
import {IoLogOut} from 'react-icons/io5';
import {HiUser} from 'react-icons/hi2';
import {RxTextAlignJustify} from 'react-icons/rx';

import { NotificationModal } from "../components/NotificationModal";
import { Roommate } from "../data/roomate";
import RoommateCard from '../components/RoommateCard/RoommateCard'



import { NavLink } from "react-router-dom";
export const User = () => {
  const { user, setUserModal } = useStateContext();
  return (
    <div className="bg-blue-foundation fixed inset-0">

      <div className="h-12 px-8 text-blue bg-white shadow-md md:hidden w-full flex items-center justify-between">
        <span className="font-bold hover:cursor-pointer"><NavLink to='/'>PairMe</NavLink></span>
        <div className="flex gap-2 items-center">
          <span className=" hover:cursor-pointer rounded-full ring-1 ring-gray-300 w-5 h-5 text-xxs flex items-center justify-center"><HiUser/></span>
          <span className="hover:cursor-pointer text-2xl"><RxTextAlignJustify/></span>
        </div>
      </div>

      <div className="relative overflow-x-hidden flex">  

        {/* <div className="fixed bottom-0 left-0 w-full"><Footer/></div> */}
        
        <section className=" overflow-y-auto hidden md:flex flex-col items-center h-screen w-3/12 text-white bg-blue">
  
          <div className="text-2xl font-bold mt-24 mx-auto"><NavLink to ='/'>PairMe</NavLink></div>
          <div className="w-full text-center">
            <div className="rounded-full mx-auto ring-gray-active ring-4 w-36 h-36 mt-12">
              <img className="w-full h-full" src="" alt="" />
            </div>
            <div className="mt-7">{user?.name}</div>
            <div className="flex justify-center mt-3 text-xs">View Profile <span><BsArrowRight className=" ml-2"/></span></div>
          </div>

          <div className=" mb-96 mt-8 w-full px-5 text-center gap-y-1 flex flex-col">
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><AiTwotoneHome/></span> Dashboard</button>
            <button onClick={()=>setUserModal(true)} className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><BsBellFill/></span>Notification</button>
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><SiGooglechat/></span>Pull down space</button>
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><IoMdSettings/></span>Settings</button>
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span className="-rotate-180"><IoLogOut/></span>Log out</button>
          </div>

        </section>

        {/* Perform nested routing for both accomodation and roomate here */}
        <section className=" w-full md:w-9/12 md:px-28 px-8 pt-14 md:pt-32 overflow-y-auto h-screen text-blue relative overflow-x-hidden">
        <div className="hidden md:block absolute -top-40 -right-20 bg-white ring-blue ring-8 w-96 h-96 rounded-full"></div>

          {user?.status ==='findingRoommate' ? (
          <div className="grid grid-cols-1 w-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-5xl font-black md:font-bold">Roommates</h1>
              <div className="w-10/12 md:w-8/12 text-xs  md:text-base">
              Find your perfect match and share your university 
              experience with the right roommate!
              </div>
              <div className="text-sm flex items-center justify-between h-11 mt-8  gap-2 md:gap-5 w-full">
                <input type="text"className="h-full w-full rounded-xl md:rounded-2xl outline-none ring-blue ring-1 px-2 md:px-5 bg-transparent"/> 
                <button className="h-full w-24 md:w-40 text-white rounded-2xl bg-blue">Search</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 justify-between mb-20 mt-10 gap-4 md:gap-8 ">
             {Roommate.map((item)=>(
              <div key={item.id}>
                <RoommateCard
                name={item.name}
                department={item.department}
                religion={item.religion}
                />
              </div>
             ))}
            </div>
          </div>  
          ): 
          (
            <div className="flex flex-col">
            <div>Accommodation</div>
            <div></div>
          </div> 
          )
          }
          
        </section>
      </div>
      <NotificationModal/>
    </div>
  );
};
