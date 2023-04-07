import { NavLink} from "react-router-dom";
import {HiUser} from 'react-icons/hi2';
import { useStateContext } from "../context/contextProvider";

export const Navbar = () => {

  const {setShowModal, accomodationRef, homeRef, roommateRef} = useStateContext()

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
    <nav className="bg-white w-full shadow-md md:shadow-lg md:h-32 flex fixed top-0 left-0 z-40 text-blue">
      <div className="justify-between px-7 py-2.5 mx-auto lg:max-w-7xl items-center flex md:px-8 w-full">
        {/* LOGO */}
        <div className="font-black text-base md:text-4xl cursor-pointer">
          <NavLink to="/">PairMe</NavLink>
        </div>
        <div className=" hidden md:block">
          <ul className="md:flex md:items-center gap-x-9 md:font-normal tracking-wider">
            {Link.map((link) => (
              <li
                onClick={handlePageSection}
                id ={link.id}
                key={link.name}
                className="text-blue text-base first:font-extralight cursor-pointer"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Authentication prompt */}
        <div className="flex  gap-6 md:gap-x-10 text-xxs md:text-base">
            <div className="flex items-center gap-1 cursor-pointer" onClick ={() => setShowModal(true)}>
                <span className="hidden md:block"><HiUser/></span> <span>Log in</span>
            </div>
            <div>
                <NavLink to ='/signup'><button className="bg-blue text-white h-7 w-16 md:h-14 md:w-32 rounded-full">Sign Up</button></NavLink>
            </div>
        </div>
      </div>
    </nav>
  );
};
