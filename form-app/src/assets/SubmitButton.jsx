import { useState } from "react";
import ShowData from "./ShowData";

const SubmitButton = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  const onSubmitClicked = () => {
    setClicked(true);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="submit"
        onClick={onSubmitClicked}
        className="mt-7 bg-lime-500 px-6 py-3 rounded-3xl text-sm text-white mb-6 hover:bg-red-600 mb-7"
      >
        Complete
      </button>
      {clicked && <ShowData dataToShow={data} />}
    </div>
  );
};

export default SubmitButton;
