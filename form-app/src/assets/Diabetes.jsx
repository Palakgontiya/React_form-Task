import { useState } from "react";

const Diabetes = ({ onDiabetesUpdate }) => {
  const [diabetes1, setDiabetes1] = useState(false);
  const [diabetes2, setDiabetes2] = useState(false);
  const [diabetes3, setDiabetes3] = useState(false);

  const onHandleChange = (e) => {
    if (e.target.id === "pre-diabetes") {
      setDiabetes1(true);
      setDiabetes2(false);
      setDiabetes3(false);
      onDiabetesUpdate({ havediabetes: "Pre-Diabetes" });
    } else if (e.target.id === "type-2") {
      setDiabetes1(false);
      setDiabetes2(true);
      setDiabetes3(false);
      onDiabetesUpdate({ havediabetes: "type-2" });
    } else {
      setDiabetes1(false);
      setDiabetes2(false);
      setDiabetes3(true);
      onDiabetesUpdate({ havediabetes: "neither" });
    }
  };
  return (
    <div className="flex justify-center items-center gap-4 w-full h-[130px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">DIABETES</div>

        <div className="flex flex-col justify-start w-[500px] h-full  ">
          <div className="font-bold text-gray-400 text-[12px] mt-7">
            Have you been diagnosed with diabetes before?
          </div>
          <div className="flex justify-start items-center gap-3 mt-7">
            <input
              type="radio"
              id="pre-diabetes"
              checked={diabetes1}
              className="w-7 h-7 "
              onChange={onHandleChange}
            />
            <label htmlFor="pre-diabetes">Pre-Diabetes</label>
            <input
              type="radio"
              id="type-2"
              checked={diabetes2}
              className="w-7 h-7 "
              onChange={onHandleChange}
            />
            <label htmlFor="type-2">Type-2</label>
            <input
              type="radio"
              id="neither"
              checked={diabetes3}
              className="w-7 h-7 "
              onChange={onHandleChange}
            />
            <label htmlFor="neither">Neither</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diabetes;
