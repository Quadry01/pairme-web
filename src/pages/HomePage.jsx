import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { DropDownComponent } from "../components/DropDown";
import { Footer } from "../components/Footer";
import { CiSearch } from "react-icons/ci";
import { useStateContext } from "../context/contextProvider";
import AccomodationCard from "../components/AccomodationCard/AccomodationCard";
import RoommateCard from "../components/RoommateCard/RoommateCard";
import { Roommate } from "../data/roomate";

import "../App.css";

import "../index.css";
import homeImg from "../images/Ellipse_6.png";
import homeImg7 from "../images/Ellipse7.png";
import homeImg8 from "../images/Ellipse8.png";

export const HomePage = forwardRef(() => {
  const { accomodationRef, homeRef, roommateRef} =
    useStateContext();

  return (
    <div className="relative bg-blue-foundation w-full h-auto">
      <section
        ref={homeRef}
        className="relative flex flex-col md:flex-row md:px-28 px-8 items-center w-full  overflow-x-clip"
      >
        <div className="flex flex-col  gap-3 md:gap-7 mt-14 md:mt-52 w-full md:w-8/12 z-30">
          <div className="w-11/12 md:w-9/12 text-blue">
            <div className="text-2xl md:text-5xl font-black">
              Find the best fit for you, both in roommate & accommodation
            </div>
            <div className="text-xxs w-9/12 md:w-full md:text-base font-normal mt-4">
              We ensure you encounter zero stress when searching for a budget
              friendly apartment or for a suitable roommate.
            </div>
          </div>
          <div className="shadow-sm md:shadow-md w-full h-11 md:h-28 px-2 md:px-4 rounded-lg md:rounded-3xl flex items-center justify-between bg-white">
            <div className="flex justify-between items-center w-9/12">
              <DropDownComponent dropName="Location" />
              <DropDownComponent dropName="Price" />
              <DropDownComponent dropName="Type" />
            </div>
            <button className="text-white bg-blue flex rounded-full w-14 md:w-36 h-5 md:h-14 items-center text-xxs md:text-base justify-between px-2 md:px-4 tracking-wider font-light md:font-medium">
              <span>
                <CiSearch />
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden absolute rounded-full ring-6 md:ring-8 ring-gray-active md:ring-blue-ring w-80 md:w-home-mg h-80 md:h-home-mg -right-32 md:right-28 top-44 z-20">
          <img src={homeImg} className="w-full h-full" alt="" />
        </div>
      </section>

      <section className="relative text-white mt-40 md:mt-28 main-section overflow-x-clip">
        <div className="flex flex-col items-center justify-center pb-16 md:pb-48">
          <div className="flex flex-col relative md:mt-44">
            <div className="absolute -top-16 md:top-0 -left-28 md:left-0 md:relative z-30 md:z-10 overflow-hidden rounded-full ring-4 md:ring-6 ring-gray-active md:ring-blue-foundation h-36 w-36 md:h-64 md:w-64">
              <img src={homeImg7} className="w-full h-full" alt="" />
            </div>
            <div className="absolute z-20 -bottom-3 -right-12 overflow-hidden hidden md:block rounded-full ring-4 md:ring-6 ring-blue-foundation h-28 w-28">
              <img src={homeImg8} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className=" w-10/12 md:w-7/12 mx-auto mt-40 md:mt-10 z-30">
            <div className=" md:text-center font-semibold md:font-bold text-lg md:text-5xl">
              What is PairMe About?
            </div>
            <div className="font-thin text-xs leading-6 md:font-light md:text-lg md:mt-11 text-justify">
                Pairme.com is a platform that seeks to make the process of accommodation and roommate pairing easy for Students in Nigeria tertiary institutions.
                We do this by connecting Students in need of affordable accommodation 
                with students with comfortable accommodation seeking for a roommate to share with. We have a large number of students registered on our platform and each student 
                webpage where they upload the pictures of their hostels and its specifications.
            </div>
          </div>
        </div>
      </section>

      <section ref={accomodationRef} className="relative text-blue overflow-x-clip">
        <div className="flex flex-col gap-y-6 mt-4 md:mt-12">
          <div className="text-center flex flex-col items-center">
            <div className="text-xl md:text-5xl font-bold">Accomodations</div>
            <div className="mt-3 text-xs md:text-base font-light w-10/12 md:w-5/12">
              Discover your ideal ‘home away from home’ with our affordable &
              student-friendly range of accommodation options!
            </div>
          </div>
          <div className="relative grid grid-cols-3  -mx-20 md:-mx-40 md:grid-cols-5 items-center justify-center gap-5 md:gap-10">
            <AccomodationCard />
          </div>
          <div className="relative flex ">
            <div className="h-80  w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 left-0"></div>
            <div className="h-80 w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 right-0"></div>
          </div>
          <div className="text-center">
            <Link to="/signup">
              <button className="bg-blue text-white rounded-full w-36 h-8 px-5 md:w-72 md:h-16 md:px-9 md:font-normal text-xxs md:text-base">
                sign up to view more
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={roommateRef}
        className="relative text-white mt-8 md:mt-14 pb-16 pt-16 md:pb-40 md:pt-40 main-section overflow-x-clip "
      >
        <div className="grid grid-cols-1 gap-y-6 mt-4 relative ">
          <div className="text-center flex flex-col items-center">
            <div className="text-xl md:text-5xl font-bold">Roommates</div>
            <div className="mt-3 text-xs md:text-base font-light w-10/12 md:w-5/12">
              Find your perfect match and share your university experience with
              the right roommate!
            </div>
          </div>
          <div className="relative grid grid-cols-3  -mx-20 md:-mx-40 md:grid-cols-5 items-center justify-center gap-5 md:gap-10">
            
            {(window.innerWidth > 798 ? Roommate.slice(0, 5) : Roommate.slice(0, 3)).map((item) => (
              <div key={item.id} className="relative">
                <RoommateCard 
                name={item.name}
                department={item.department}
                religion={item.religion}
                />
              </div>
            ))}

            {/* <div className="h-64  w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 left-0"></div>
              <div className="h-64 w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 right-0"></div> */}
          </div>
          <div className="text-center">
            {" "}
            <Link to="/signup">
              {" "}
              <button className="bg-transparent rounded-full w-36 h-8 px-5 md:w-72 md:h-16 md:px-9 md:font-normal text-xxs md:text-base">
                sign up to view more
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row px-11 md:px-40 mt-9 md:mt-24 md:pb-24 pb-10">
          <div className="mx-auto">
            <div className="rounded-full ring-6 ring-gray-active w-64 h-64 md:w-72 md:h-72 overflow-hidden">
              <img className="h-full w-full bg-cover" src={homeImg8} alt="" />
            </div>
          </div>
          <div>
            <div className=" text-blue mt-7 md:ml-20 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="text-xl md:text-4xl font-bold">
                Got an available space and need a roommate?
              </div>
              <div className="mt-3 text-xs md:text-base font-light w-10/12 md:w-5/12">
                List your property on our website and connect with students
                looking for accommodation.
              </div>
            </div>
            <div className="mt-7 text-center md:ml-20 md:text-start">
              <Link to="/signup">
                <button className="bg-blue text-white rounded-full w-36 h-8 px-5 md:w-72 md:h-16 md:px-9 md:font-normal text-xxs md:text-base">
                  share your space
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  footer section */}
      <section>
        <Footer />
      </section>
    </div>
  );
});
