import { useState, useEffect } from "react";

const Gender = ({ onGenderUpdate }) => {
  const [gender, setGender] = useState("female");

  useEffect(() => {
    onGenderUpdate({ gender: gender });
  }, [gender]);

  const handleGenderClick = (e) => {
    setGender(e.target.name);
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[130px] text-gray-400 text-xs">
      <div className="flex w-[800px]  h-full justify-center items-center border-b border-gray-200">
        <div className="w-[200px] ">YOUR GRNDER</div>

        <div className="flex items-center  w-[500px] gap-[70px] ">
          <button
            name="female"
            value={gender}
            onClick={handleGenderClick}
            className="w-10 h-10 rounded-full flex justify-start items-center"
          >
            <img
              className={`object-cover w-full h-full rounded-full me-3 ${
                gender === "male" || gender === "" ? "grayscale" : ""
              }`}
              style={{ pointerEvents: "none" }}
              src="../../public/images/female.png"
            />
            <span>Female</span>
          </button>
          <button
            name="male"
            value={gender}
            onClick={handleGenderClick}
            className="w-10 h-10 rounded-full flex justify-start items-center "
          >
            <img
              className={`object-cover w-full h-full rounded-full me-3 ${
                gender === "female" || gender === "" ? "grayscale" : ""
              }`}
              style={{ pointerEvents: "none" }}
              src="../../public/images/male.png"
            />
            <span>Male</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gender;
