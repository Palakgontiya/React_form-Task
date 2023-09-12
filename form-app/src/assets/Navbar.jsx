import { BsCheckCircle } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center text-xs bg-gray-100 h-9 font-medium  ">
      <div className="flex justify-center items-center gap-2 bg-white h-full w-[200px] border border-gray-100 text-gray-400">
        <BsCheckCircle className="text-lime-500 font-bold" />
        PERSONAL INFO
      </div>

      <div className="flex justify-center items-center gap-2 bg-white h-full w-[200px] border border-gray-100 text-gray-400">
        <BsCheckCircle className="text-lime-500 font-bold" />
        ELIGIBILITY
      </div>

      <div className="flex justify-center items-center gap-2 h-full w-[200px] bg-blue-600 text-white">
        <BiCircle className="font-bold" />
        YOUR HEALTH
      </div>

      <div className="flex justify-center items-center gap-2 h-full w-[200px] border border-gray-200 text-gray-400">
        <BiCircle className="font-bold" />
        COMMITMENT
      </div>
    </div>
  );
};

export default Navbar;
