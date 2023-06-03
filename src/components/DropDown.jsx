import { BsChevronDown } from "react-icons/bs";

export const DropDownComponent = ({
  pHolder
}) => {
  return (
    <div className="relative h-full flex items-center text-[7.3px] md:text-[20px]">
      <input className="border md:rounded-[9px] rounded-[9px] h-full border-blue bg-white md:px-3 px-1 w-[80px] md:w-[170px]" placeholder={`${pHolder}`}></input>
       <span className="absolute md:top-[12px] bottom-[7px] md:bottom-0 md:right-5 right-2 text-blue"><BsChevronDown/></span>
       {/* <div className="absolute md:bottom-[-110px] bg-white h-20 md:w-[300px] rounded-[12px] z-[65]">
       </div> */}
    </div>
  );
};
