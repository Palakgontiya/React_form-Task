import { useEffect, useState } from "react";

const HeightWeight = ({onHeightWeightUpdate}) => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [kgs, setKgs] = useState("");

  useEffect(()=>{
    onHeightWeightUpdate({feet: feet, inches: inches, kgs: kgs})
  }, [feet, inches, kgs])

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[130px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">HEIGHT & WEIGHT</div>

        <div className="flex items-center w-[500px] gap-5  ">
          <input
            id="feet-input"
            name="feet"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="0"
            onChange={(e) => {
              setFeet(e.target.value);
            }}
            className="w-12 h-10 bg-gray-100 text-center rounded-sm border border-gray-200 "
          />
          <label htmlFor="feet-input">ft.</label>
          <input
            name="inches"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="00"
            onChange={(e) => {
              setInches(e.target.value);
            }}
            className="w-14 h-10 bg-gray-100 text-center rounded-sm border border-gray-200"
            id="inch-input"
          />
          <label htmlFor="inch-input">in.</label>
          <input
            name="kgs"
            type="text"
            placeholder="0000"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={(e) => {
              setKgs(e.target.value);
            }}
            className="w-16 h-10 bg-gray-100 text-center rounded-sm border border-gray-200"
            id="lbs-input"
          />
          <label htmlFor="lbs-input">kgs.</label>
        </div>
      </div>
    </div>
  );
};

export default HeightWeight;
