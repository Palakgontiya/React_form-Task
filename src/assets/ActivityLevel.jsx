import { useEffect, useState } from "react";

const ActivityLevel = ({ onActivityUpdate }) => {
  const [isChecked1, setisChecked1] = useState(false);
  const [isChecked2, setisChecked2] = useState(false);

  useEffect(() => {
    onActivityUpdate({ NotAcitive: isChecked1, active: isChecked2 });
  }, [isChecked1, isChecked2]);

  const handleCheckedClick = (e) => {
    if (e.target.id === "not-active") {
      setisChecked1(true);
      setisChecked2(false);
      onActivityUpdate({ activity: "You should be more active" });
    } else {
      setisChecked1(false);
      setisChecked2(true);
      onActivityUpdate({ activity: "You are active, keep it up" });
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[150px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">ACTIVITY LEVEL</div>

        <div className="flex flex-col justify-center w-[500px] h-full  ">
          <div className="flex flex-col gap-1 mt-7">
            <div className="font-bold text-gray-400 text-[12px]">
              How active you are on a weekly basis?
            </div>
            <div className="flex gap-2 justify-start items-center">
              <div className="flex flex-col ">
                <img
                  src="../../public/images/bench.png"
                  className="w-14 h-14 grayscale ms-10"
                />

                <div className="flex items-center justify-center gap-4">
                  <input
                    id="not-active"
                    type="radio"
                    checked={isChecked1}
                    onChange={handleCheckedClick}
                    className=" flex justify-center items-center w-7 h-7 rounded-lg bg-gray-200 border border-gray-300 "
                  />
                  <div className="flex flex-col justify-start">
                    <label htmlFor="not-active" className="font-bold">
                      Not Very Active
                    </label>
                    <label className="text-[9px]">
                      Less than 60 mins of phisical activity
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <img
                  src="../../public/images/cycle.png"
                  className="w-14 h-14 ms-10 grayscale"
                />

                <div className="flex items-center justify-center gap-4">
                  <input
                    id="active"
                    type="radio"
                    checked={isChecked2}
                    onChange={handleCheckedClick}
                    className=" flex justify-center items-center w-7 h-7 rounded-lg bg-gray-200 border border-gray-300 "
                  />
                  <div className="flex flex-col justify-start">
                    <label htmlFor="active" className="font-bold">
                      Active
                    </label>
                    <label className="text-[9px]">
                      60+ mins physical activity per week
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLevel;
