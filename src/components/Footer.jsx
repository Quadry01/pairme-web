import '../App.css';
import {HiOutlineEnvelope} from'react-icons/hi2';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn, FaFacebookSquare, FaTwitter} from 'react-icons/fa';



export const Footer = () => {
    return(
        <div className=" relative footer-section overflow-x-clip text-white grid grid-cols-1 items-center pb-20 ">
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
    )
}