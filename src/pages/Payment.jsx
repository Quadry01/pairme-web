import { useStateContext } from "../context/contextProvider";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

import '../App.css';
import {HiOutlineEnvelope} from'react-icons/hi2';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn, FaFacebookSquare, FaTwitter} from 'react-icons/fa';
import PairMeLogo from "../components/PairMeLogo";

export const Payment = () => {
  const { setUserModal } = useStateContext();

  return (
    <div className="bg-white md:bg-blue-foundation w-full  text-blue">
      <div className="z-40  hidden bg-white md:flex items-center h-24 pl-28 font-bold text-4xl shadow-sm w-full">
        <Link onClick={() => setUserModal(false)} to="/">
          <PairMeLogo color='blue'/>
        </Link>
      </div>
      <div className="flex items-center justify-center md:hidden font-bold text-base w-full text-center mt-14 mb-8">
        <Link onClick={() => setUserModal(false)} to="/">
          <PairMeLogo color='blue'/>
        </Link>
      </div>
      <div className=" relative">
        <div className=" relative md:h-[100%] md:top-14 md:z-20 bg-white text-xxs md:text-sm flex flex-col gap-y-3 md:gap-y-6 mx-auto w-[80%] md:w-[50%] shadow-md rounded-xl md:rounded-3xl px-9 md:px-24 py-12 md:py-24">
          <span className="hidden md:block font-bold text-4xl">PairMe</span>
          <div className="w-full">
            <span className="text-xs md:text-xl font-medium">Card Number</span>
            <br />
            <span className="text-gray-500">Enter the 16-digit card number on the card</span>
            <br />
            <input
              className="w-full md:rounded-2xl rounded-md h-8 ring-1 ring-blue md:h-[50px] md:px-4 md:mt-3"
              type="number"
            />
          </div>
          <div className="flex  gap-x-2">
            <div className="w-full">
              <span className="text-xs md:text-xl font-medium">CVV</span>
              <br />
              <input
                className="w-full md:rounded-2xl rounded-md h-8 ring-1 ring-blue md:h-[50px] md:px-4 md:mt-3"
                type="number"
              />
            </div>
            <div className="w-full">
              <span className="text-xs md:text-xl font-medium">Exp. date</span>
              <br />
              <input
                className="w-full md:rounded-2xl rounded-md h-8 ring-1 ring-blue md:h-[50px] md:px-4 md:mt-3"
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div>
            <span className="text-xs md:text-xl font-medium">Password</span>
            <br />
            <span className="text-gray-500">Enter the 4-digit card pin</span>
            <br />
            <input
              className="w-full md:rounded-2xl rounded-md h-8 ring-1 ring-blue md:h-[50px] md:px-4 md:mt-3"
              type="password"
            />
          </div>
          <div>
            <span className="text-xs md:text-xl font-medium">OTP</span>
            <br />
            <span className="text-gray-500">Enter the 6-digit OTP sent to your mail</span>
            <br />
            <input
              className="w-full md:rounded-2xl rounded-md h-8 ring-1 ring-blue md:h-[50px] md:px-4 md:mt-3"
              type="number"
            />
          </div>
          <div className="w-full mt-2 md:mt-4">
            <div className="flex justify-center">
            <input type="radio" />
            <span className=" pl-3 font-medium md:text-xl">I agree to the Terms and Conditions</span> <br />
            </div>
            <div className="text-center mt-6">
              <button className="md:text-xl md:w-[250px] w-28 h-8 md:h-[70px] bg-blue text-white text-center rounded-full mx-auto">
                Make payment
              </button>
            </div>
          </div>
        </div>
      </div>

        {window.innerWidth > 798 ?(<Footer/>):
        (
      <div className="mt-10 w-[80%] shadow-md rounded-xl grid grid-cols-1 items-center mx-auto mb-8 text-gray-600 pb-8">
         <div className="z-10 font-bold mx-auto mt-20 md:text-4xl">PairMe</div>
          <div className="z-10 text-xxs md:text-sm grid grid-cols-2 mt-14 gap-14 md:gap-20 md:grid-cols-4 mx-auto">
            <div>
              <h3 className="text-xs md:text-xl font-semibold">Company</h3>
              <ul className="list-none mt-3">
                <li>Home</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
            <h3 className="text-xs md:text-xl font-semibold">Our Services</h3>
              <ul className="list-none mt-3">
                <li>Find Roomate</li>
                <li>Find Accomodation</li>
              </ul>
            </div>
            <div>
            <h3 className="text-xs md:text-xl font-semibold">Legal</h3>
              <ul className="list-none mt-3">
                <li>Terms and Conditions</li>
                <li>Service Agreement</li>
              </ul>
            </div>
            <div>
            <h3 className="text-xs md:text-xl font-semibold">Support</h3>
              <ul className="list-none mt-3">
                <li>Customer Care</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="z-10 gap-5 md:gap-10 md:text-2xl mx-auto flex mt-8 md:mt-16">
            <span className='cursor-pointer'><HiOutlineEnvelope/></span>
            <span className='cursor-pointer'><BsInstagram/></span>
            <span className='cursor-pointer'><FaLinkedinIn/></span>
            <span className='cursor-pointer'><FaFacebookSquare/></span>
            <span className='cursor-pointer'><FaTwitter/></span>
          </div>
          <div className="z-10 mx-auto mt-8 text-xxs md:text-lg md:font-thin">Copyright &#169; Pairme {new Date().getFullYear()}</div>
      </div>
        )}
    </div>
  );
};
