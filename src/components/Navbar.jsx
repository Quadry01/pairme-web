import { NavLink, useLocation} from "react-router-dom";
import {HiUser} from 'react-icons/hi2';
import { useStateContext } from "../context/contextProvider";
import { useState } from "react";
import { useEffect } from "react";
import PairMeLogo from './PairMeLogo.jsx';

export const Navbar = () => {
  const location = useLocation()
  const {setShowModal, accomodationRef, homeRef, roommateRef} = useStateContext()

  const [showNavList, setShowNavList] = useState(false)

  useEffect(()=> {
    if(location.pathname ==='/signup'){
      setShowNavList(false)
    }else{
      setShowNavList(true)
    }
  },[location])

  const Link = [
    { name: "Home", link: "/", id:"home" },
    { name: "Find Roommate", link: "/#find-roommate", id:"roommate" },
    { name: "Find Accommodation", link: "/#find-accomodation", id:"accomodation" },
    { name: "Contact Us", link: "/#contact-us", id:"contact" },
  ];
  

  const handlePageSection = (e)=> {
    if(e.target.id === "home") homeRef.current?.scrollIntoView({behavior:'smooth', block: 'end'})
    if (e.target.id === "accomodation") accomodationRef.current?.scrollIntoView({behavior:'smooth',block: 'center'})
    if (e.target.id === "roommate")roommateRef.current?.scrollIntoView({behavior:'smooth', block: 'center'})
}

  return (
    <nav className="bg-white w-full shadow-sm md:shadow-sm md:h-24 flex fixed top-0 left-0 z-40 text-blue">
      <div className="justify-between px-7 py-2.5 items-center flex md:px-28 w-full">
        {/* LOGO */}
        <div className="font-bold text-base md:text-4xl cursor-pointer">
          <NavLink to="/">
            <PairMeLogo color='blue'/>
          </NavLink>
        </div>
        <div className=" hidden lg:block">
          {showNavList && 
          <ul className="md:flex md:items-center gap-x-9 md:font-normal tracking-wider">
            {Link.map((link) => (
              <li
                onClick={handlePageSection}
                id ={link.id}
                key={link.name}
                className="text-blue text-base first:font-bold cursor-pointer"
              >
                  {link.name}
              </li>
            ))}
          </ul>
          }
        </div>
        {/* Authentication prompt */}
        <div className="flex  gap-6 md:gap-x-10 text-xxs md:text-base">
            <div className="flex items-center gap-1 cursor-pointer" onClick ={() => setShowModal(true)}>
                <span className="hidden md:block"><HiUser/></span> <span>Log in</span>
            </div>
            { showNavList &&
            <div>
                <NavLink to ='/signup'><button className="bg-blue text-white h-7 w-16 md:h-10 md:w-24 rounded-full">Sign Up</button></NavLink>
            </div>
            }
        </div>
      </div>
    </nav>
  );
};
