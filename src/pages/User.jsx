import { useStateContext } from "../context/contextProvider";
import {BsArrowRight,BsBellFill} from 'react-icons/bs';
import {AiTwotoneHome} from 'react-icons/ai';
import {SiGooglechat} from 'react-icons/si';
import {IoMdSettings} from 'react-icons/io'
import {IoLogOut} from 'react-icons/io5';
import {HiUser} from 'react-icons/hi2';
import {RxTextAlignJustify} from 'react-icons/rx';
import { useState } from "react";
import accommodationData from '../data/accommodation.json'
import { NotificationModal } from "../components/NotificationModal";
import { LogoutModal } from "../components/LogoutModal";
import { Roommate } from "../data/roomate";
import { UserProfileModal } from "../components/UserProfileModal";
import RoommateCard from '../components/RoommateCard/RoommateCard';
import profileImg from '../images/humanIcon.jpeg';
import { NavLink } from "react-router-dom";
import { RoommateModal } from "../components/RoommateModal";
import AccomodationCard from "../components/AccomodationCard/AccomodationCard";

export const User = () => {
  const { user, setUserModal, setProfileModal, setLogoutModal,setRoommateModal, roommateModal } = useStateContext()
  const [openSidebar, setOpenSidebar] = useState(false);
  const [roommateInfo, setRoomateInfo] = useState(null);

  const handleRoommateInfo = (item)=>{
        setRoommateModal(!roommateModal)
        setRoomateInfo(item)
  }

  return (
    <div className="bg-blue-foundation relative">

      <div className="h-12 fixed z-40 px-8 text-blue bg-white shadow-md md:hidden w-full flex items-center justify-between">
        <span className="font-bold hover:cursor-pointer"><NavLink to='/'>PairMe</NavLink></span>
        <div className="flex gap-2 items-center">
          <span onClick={()=>setProfileModal(true)} className=" hover:cursor-pointer rounded-full ring-1 ring-gray-300 w-5 h-5 text-xxs flex items-center justify-center"><HiUser/></span>
          <span onClick={()=>setOpenSidebar(true)} className="hover:cursor-pointer text-2xl"><RxTextAlignJustify/></span>
        </div>
      </div>

      {/* sliding sidebar for mobile  */}
   <div className=" md:hidden">
    { openSidebar===true ? (
      <div onClick={(e)=> e.target.id === 'sidebarContainer'? setOpenSidebar(false): null} id ='sidebarContainer' 
                className= {` fixed md:hidden bg-black z-50 bg-opacity-30 top-0 h-full w-full`}
      >
      </div>  ): null}
        <div className="relative">
          <div className={`fixed z-100 flex items-center flex-col overflow-hidden gap-y-8 text-white bg-blue h-[90vh] w-8/12 top-0 -right-0 ${openSidebar===false ?'translate-x-full':'translate-x-0'} ease-in-out duration-300`}>
          <div className="absolute -top-32 -right-28 rounded-full ring-6 ring-blue-ring bg-white w-64 h-64"></div>
            <div className="absolute -bottom-32 -left-28 rounded-full ring-6 ring-blue-ring bg-white w-64 h-64"></div>
            <div className="text-lg font-bold w-full ml-16 mt-24"><NavLink to ='/'>PairMe</NavLink></div>
          <div className=" w-full px- gap-y-1 flex text-xxs items-center flex-col">
            <button onClick={()=>setOpenSidebar(false)} className="w-8/12 rounded-md h-8 hover:text-blue hover:bg-white gap-2 flex items-center pl-12"><span><AiTwotoneHome/></span> Dashboard</button>
            <button onClick={()=>setUserModal(true)} className="w-8/12 rounded-md h-8 hover:text-blue hover:bg-white gap-2 flex items-center pl-12"><span><BsBellFill/></span>Notification</button>
            <button className="w-8/12 rounded-md h-8 hover:text-blue hover:bg-white gap-2 flex items-center pl-12"><span><SiGooglechat/></span>Pull down space</button>
            <button className="w-8/12 rounded-md h-8 hover:text-blue hover:bg-white gap-2 flex items-center pl-12"><span><IoMdSettings/></span>Settings</button>
            <button onClick={()=>setLogoutModal(true)} className="w-8/12 rounded-md h-8 hover:text-blue hover:bg-white gap-2 flex items-center pl-12"><span className="-rotate-180"><IoLogOut/></span>Log out</button>
          </div>
          </div>
        </div>
        </div>

      <div className="relative overflow-x-hidden flex">  
        {/* <div className="fixed bottom-0 left-0 w-full"><Footer/></div> */} 
        <section className=" md:overflow-y-auto hidden md:flex flex-col items-center md:h-screen md:w-3/12 text-white bg-blue">
          <div className="text-2xl font-bold mt-24 mx-auto"><NavLink to ='/'>PairMe</NavLink></div>
          <div className="w-full text-center">
            <div className="rounded-full mx-auto ring-gray-active ring-8 w-36 h-36 mt-12 overflow-hidden">
              <img className="w-full h-full" src={profileImg} alt="" />
            </div>
            <div className="mt-7">{user?.name}</div>
            <div onClick={()=>setProfileModal(true)} className="flex justify-center mt-3 text-xs cursor-pointer">View Profile <span className="flex items-center"><BsArrowRight className=" ml-2"/></span></div>
          </div>
          <div className=" mb-96 mt-8 w-full px-5 text-center gap-y-1 flex flex-col">
            <button onClick={()=>setOpenSidebar(false)} className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><AiTwotoneHome/></span> Dashboard</button>
            <button onClick={()=>setUserModal(true)} className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><BsBellFill/></span>Notification</button>
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><SiGooglechat/></span>Pull down space</button>
            <button className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span><IoMdSettings/></span>Settings</button>
            <button onClick={()=>setLogoutModal(true)} className="w-full rounded-2xl h-16 hover:text-blue hover:bg-white gap-2 flex items-center pl-24"><span className="-rotate-180"><IoLogOut/></span>Log out</button>
          </div>
        </section>

        {/* Perform nested routing for both accomodation and roomate here */}
        <section className=" w-full md:w-9/12 md:px-28 px-8 pt-28 md:pt-32 overflow-y-auto h-screen text-blue relative overflow-x-hidden">
        <div className="hidden md:block absolute -top-40 -right-20 bg-white ring-blue ring-[1rem] w-96 h-96 rounded-full"></div>

          <div className="grid grid-cols-1 w-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-5xl font-black md:font-bold">{user?.status ==='findingRoommate' ?'Roommates':'Accommodations'}</h1>
              <div className="w-10/12 md:w-8/12 text-xs  md:text-base">
              {user?.status ==='findingRoommate' ?'Find your perfect match and share your university experience with the right roommate! ':
              'Discover your ideal ‘home away from home’ with our affordable & student-friendly range of accommodation options!'}
              </div>
              <div className="text-sm flex items-center justify-between h-8 md:h-11 mt-8  gap-2 md:gap-5 w-full">
                <input placeholder="search keyword" type="text"className="h-full w-full rounded-xl md:rounded-2xl outline-none ring-blue ring-1 px-2 md:px-5 bg-transparent"/> 
                <button className="h-full w-24 md:w-40 text-white rounded-full bg-blue text-xs md:text-lg">Search</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-between mb-20 mt-10 gap-4 md:gap-7 ">
             {user?.status ==='findingRoommate' && Roommate.map((item)=>(
              <div onClick={()=>handleRoommateInfo(item)} key={item.id} >
                <RoommateCard
                height={'h-44 md:h-[37vh] rounded-xl md:rounded-2xl hover:bg-blue hover:text-white hover:cursor-pointer'}
                nameText={'font-semibold text-sm md:text-lg'}
                cardText={'text-xxs md:text-xs pl-2 md:pl-4 pt-1 md:pt-3 gap-1 md:gap-2'}
                name={item.name}
                department={item.department}
                religion={item.religion}
                />
              </div>
             )) }

                { user?.status === 'findingAccommodation' && accommodationData.map((item) => (
                  <div key={item.id}>
                    <AccomodationCard
                     height={'h-44 md:h-[37vh] rounded-xl md:rounded-2xl hover:bg-blue hover:text-white hover:cursor-pointer'}
                     nameText={'font-semibold text-sm md:text-lg'}
                     cardText={'text-xxs md:text-xs pl-2 md:pl-4 pt-1 md:pt-3 gap-1 md:gap-2'}
                     payText ={'text-xs md:text-sm'}
                     type ={item.type}
                     yearlyrent={item.yearlyrent}
                     location={item.name}
                    />
                  </div>
                ))
              
            }
            </div>
          </div>  
         
        </section>

      </div>
      <NotificationModal/>
      <UserProfileModal/>
      <LogoutModal/>
      <RoommateModal roommateInfo={roommateInfo}/>
    </div>
  );
};
