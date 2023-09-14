import { useState, useEffect } from "react";
import { BsCheckSquareFill } from "react-icons/bs";

const FamilyHistory = ({onFamilyhistoryupdate}) => {
  const [familydiabetes, setfamilyDabetes] = useState("");

  useEffect(() => {
    onFamilyhistoryupdate({diabetes:familydiabetes })
  }, [familydiabetes]);

  const handleClick = (e) => {
    setfamilyDabetes(e.target.id);
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[150px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">FAMILY HISTORY</div>

        <div className="flex flex-col justify-start w-[500px] h-full  ">
          <div className="flex flex-col gap-1 mt-7">
            <div className="font-bold text-gray-400 text-[12px]">
              Anyone in yout family have prediabetes?
            </div>
            <div className="text-[9px]">
              Check all that apply. And if you would rather not say that is ok.
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <button
              id="parents"
              type="radio"
              onClick={handleClick}
              className=" flex justify-center items-center w-9 h-9 rounded-lg bg-gray-200 border border-gray-300 "
            >
              <BsCheckSquareFill
                className={`h-full w-full text-blue-500 ${
                  familydiabetes === "siblings" || familydiabetes === ""
                    ? "grayscale"
                    : ""
                }`}
                style={{ pointerEvents: "none" }}
              />
            </button>
            <label htmlFor="parents">Parents</label>
            <button
              id="siblings"
              type="radio"
              onClick={handleClick}
              className="w-9 h-9 rounded-lg bg-gray-200 border border-gray-300 "
            >
              <BsCheckSquareFill
                className={`h-full w-full text-blue-500 ${
                  familydiabetes === "parents" || familydiabetes === ""
                    ? "grayscale"
                    : ""
                }`}
                style={{ pointerEvents: "none" }}
              />
            </button>
            <label htmlFor="siblings">Siblings</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyHistory;
