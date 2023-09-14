import { useEffect, useState } from "react";

const Prenent = ({ onbabyUpdate }) => {
  const [isPregnent, setIsPregnent] = useState();
  const [isNotPregnent, setIsNotPregnent] = useState();

  const handlechange = (e) => {
    if (e.target.id === "pregnent") {
      setIsPregnent(true);
      setIsNotPregnent(false);
      onbabyUpdate({ pregnent: "yes" });
    } else {
      setIsPregnent(false);
      setIsNotPregnent(true);
      onbabyUpdate({ pregnent: "no" });
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[150px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">FAMILY HISTORY</div>

        <div className="flex flex-col justify-start w-[500px] h-full  ">
          <div className="flex flex-col gap-1 mt-7">
            <div className="font-bold text-gray-400 text-[12px]">
              Are you currently pregnent?
            </div>
            <div className="text-[10px]">
              We need to add some friendly help text here.
            </div>
          </div>

          <div className="flex justify-start items-center mt-7 gap-1">
            <div className="flex items-center justify-start gap-4">
              <input
                id="pregnent"
                type="radio"
                checked={isPregnent}
                onChange={handlechange}
                className=" flex justify-center items-center w-7 h-7 rounded-lg bg-gray-200 border border-gray-300 "
              />
              <div className="flex flex-col justify-start">
                <label htmlFor="pregnenr" className="font-bold">
                  Pregnent
                </label>
                <label className="text-[9px]">
                  have given birth within the last 6 months
                </label>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <input
                id="not-pregnent"
                type="radio"
                checked={isNotPregnent}
                onChange={handlechange}
                className=" flex justify-center items-center w-7 h-7 rounded-lg bg-gray-200 border border-gray-300 "
              />
              <div className="flex flex-col justify-start">
                <label htmlFor="not-pregnenr" className="font-bold">
                  Not-Pregnent
                </label>
                <label className="text-[9px]">
                  have not given birth within the last 6 months
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prenent;
