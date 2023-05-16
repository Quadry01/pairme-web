import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { DropDownComponent } from "../components/DropDown";
import { Footer } from "../components/Footer";
import { CiSearch } from "react-icons/ci";
import { useStateContext } from "../context/contextProvider";
import AccomodationCard from "../components/AccomodationCard/AccomodationCard";
import RoommateCard from "../components/RoommateCard/RoommateCard";
import { Roommate } from "../data/roomate";
import accommodationData from '../data/accommodation.json'

import "../App.css";

import "../index.css";
import homeImg from "../images/fivestudents.jpg";
import homeImg7 from "../images/Ellipse7.png";
import homeImg8 from "../images/Ellipse8.png";

export const HomePage = forwardRef(() => {
  const { accomodationRef, homeRef, roommateRef} = useStateContext();

 

  return (
    <div className="relative bg-blue-foundation w-full h-auto">
      <section
        ref={homeRef}
        className="relative flex flex-col md:flex-row md:px-28 px-8 items-center w-full  overflow-x-clip pb-40 md:pb-28 pt-14 md:pt-32"
      >
        <div className="flex flex-col  gap-3 md:gap-7  w-full md:w-8/12 z-30">
          <div className="w-11/12 md:w-9/12 text-blue">
            <div
              style={{ lineHeight: "1.2" }}
              className="text-2xl  md:text-5xl font-bold"
            >
              Find the best fit for you, both in roommate & accommodation
            </div>
            <div className="text-gray-600 text-xxs w-10/12 md:w-11/12 md:text-base font-normal mt-4">
              We ensure you encounter zero stress when searching for a budget
              friendly apartment or for a suitable roommate.
            </div>
          </div>
          <div className="shadow-sm md:shadow-md w-full h-11 md:h-24 mt-8 md:mt-4 px-4 gap-2 md:gap-4 md:px-10 rounded-lg md:rounded-3xl flex items-center justify-between bg-white">
            <div className="flex gap-2 md:gap-4 justify-between items-center grow">
              <DropDownComponent dropName="Location" option1={'Yaba'} option2={'Idi-Araba'} option3={'Akoka'} option4={'Oju-elegba'} />
              <DropDownComponent dropName="Price" option1={'250,000'} option2={'300,000'} option3={'400,000'} option4={'500,000'}/>
              <DropDownComponent dropName="Type" option1={'Single room apartment'} option2={'studio apartment'} option3={'2 bedroom shared apartment'} option4={'self contain apartment'}/>
            </div>
            <button className="text-white bg-blue flex rounded-full w-14 md:w-[153px] h-5 md:h-12 items-center text-xxs md:text-base justify-between px-2 md:px-6 tracking-wider font-light md:font-normal">
              <span className="md:text-xl">
                <CiSearch />
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden absolute rounded-full ring-8 md:ring-[1rem] ring-gray-active md:ring-blue-ring w-[85%] md:w-home-mg aspect-square md:h-home-mg -right-24 md:right-32 md:top-20 top-48 z-20 samsungs8">
          <img src={homeImg} className="w-full h-full object-cover" alt="" />
        </div>
      </section>
      <section className="relative text-white main-section overflow-x-clip main-section1">
        <div className="flex flex-col items-center justify-center pb-16 md:pb-48">
          <div className="flex flex-col relative md:mt-44">
            <div className="absolute -top-16 md:top-0 -left-[41vw] md:left-0 md:relative z-30 md:z-10 overflow-hidden rounded-full ring-4 md:ring-8 ring-gray-active md:ring-blue-foundation h-40 w-40 md:h-64 md:w-64">
              <img src={homeImg7} className="w-full h-full" alt="" />
            </div>
            <div className="absolute z-20 -bottom-3 -right-12 overflow-hidden hidden md:block rounded-full ring-6 md:ring-8 ring-blue-foundation h-28 w-28">
              <img src={homeImg8} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className=" w-10/12 md:w-[55%] mx-auto mt-40 md:mt-10 z-30">
            <div className=" md:text-center font-semibold md:font-bold text-lg md:text-5xl">
              What is PairMe About?
            </div>
            <div
              style={{ lineHeight: "2" }}
              className="font-normal text-xs md:font-light md:text-xl md:mt-11 text-justify"
            >
              Pairmeon.com simplifies the task of finding accommodation and a
              roommate for tertiary institution students in Nigeria. Our
              approach involves linking students requiring reasonably priced
              accommodation with others who already have comfortable housing and
              seek a roommate. Our platform boasts a substantial number of
              registered students, and each one has a dedicated webpage
              featuring photos and specifications of their hostels.
            </div>
          </div>
        </div>
      </section>

      <section
        ref={accomodationRef}
        className="relative text-blue overflow-x-clip"
      >
        <div className="flex flex-col gap-y-6 mt-12 md:mt-20">
          <div className="text-center flex flex-col items-center">
            <div className="text-xl md:text-5xl font-bold">Accomodations</div>
            <div className="mt-3 text-xs md:text-base font-light w-10/12 md:w-5/12">
              Discover your ideal ‘home away from home’ with our affordable &
              student-friendly range of accommodation options!
            </div>
          </div>
          <div className="relative grid grid-cols-3 mt-5 -mx-20 md:-mx-40 md:grid-cols-5 items-center justify-center gap-5 md:gap-10">
            {
              (window.innerWidth > 798
                ? accommodationData.slice(0, 5)
                : accommodationData.slice(0, 3)).map((item) =>

            <div key={item.id} className="relative md:first:blur-sm md:last:blur-sm">
              <AccomodationCard 
              height={'h-[14em] md:h-[23em] rounded-xl md:rounded-3xl'}
              nameText ={'text-sm md:text-3xl font-semibold'}
              cardText ={'md:text-sm text-xxs pl-3 md:pl-6 md:pt-5 pt-2 gap-1 md:gap-3'}
              payText ={'text-sm md:text-lg'}
              type ={item.type}
              yearlyrent={item.yearlyrent}
              location={item.name}
              />
            </div>        
              )
            }
          </div>
          <div className="relative flex ">
            <div className="h-80  w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 left-0"></div>
            <div className="h-80 w-40 backdrop-blur-sm bg-white/30 hidden md:block absolute top-0 right-0"></div>
          </div>
          <div className="text-center">
            <Link to="/signup">
              <button className="bg-blue text-white rounded-full w-36 h-8 px-5 md:w-64 md:h-14 md:px-9 md:font-normal text-xxs md:text-base">
                Sign Up To View More
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
          <div className="relative grid grid-cols-3 mt-5  -mx-20 md:-mx-40 md:grid-cols-5 items-center justify-center gap-5 md:gap-10">
            {(window.innerWidth > 798
              ? Roommate.slice(0, 5)
              : Roommate.slice(0, 3)
            ).map((item) => (
              <div
                key={item.id}
                className="relative md:first:blur-sm md:last:blur-sm"
              >
                <RoommateCard
                height={'h-[14em] md:h-[23em] rounded-xl md:rounded-3xl'} 
                nameText ={'text-sm md:text-3xl font-semibold'}
                cardText ={'md:text-sm text-xxs pl-3 md:pl-6 md:pt-5 pt-2 gap-1 md:gap-3'}
                name={item.name}
                department={item.department}
                religion={item.religion}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            {" "}
            <Link to="/signup">
              {" "}
              <button className="mt-8  bg-white text-blue rounded-full w-36 h-8 px-5 md:w-64 md:h-14 md:px-9 md:font-normal text-xxs md:text-base">
                Sign Up To View More
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row mt-9 md:mt-24 md:pb-24 pb-10 px-7 md:px-0">
          <div className="w-full md:w-[40%] flex justify-center md:justify-start md:pl-32">
            <div className="rounded-full ring-6 ring-gray-active w-64  md:w-[90%] aspect-square overflow-hidden">
              <img className="h-full w-full bg-cover" src={homeImg8} alt="" />
            </div>
          </div>
          <div>
            <div className=" text-blue mt-7 md:ml-20 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="text-xl md:text-4xl font-bold">
                Got an available space and need a roommate?
              </div>
              <div className="mt-3 text-xs md:text-base font-light w-10/12 md:w-10/12">
                List your property on our website and connect with students
                looking for accommodation.
              </div>
            </div>
            <div className="mt-7 text-center md:ml-20 md:text-start">
              <Link to="/signup">
                <button className="bg-blue text-white rounded-full w-36 h-8 px-5 md:w-64 md:h-14 md:px-9 md:font-normal text-xxs md:text-base">
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
