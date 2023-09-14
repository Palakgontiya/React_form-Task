const ShowData = ({ dataToShow }) => {
  return (
    <div className="flex flex-col bg-gray-700 w-[400px]  rounded-lg text-gray-100 gap-4 mb-6 p-5">
      <div className="bg-lime-600 py-2 w-full rounded-lg flex justify-center items-center">Please find Your details below...</div>
      <div>Gender:  {dataToShow.gender}</div>
      <div>
        Height&Weight:  {dataToShow.feet} feet {dataToShow.inches} inches and{" "}
        {dataToShow.kgs} kilos
      </div>
      <div>FamilyHistory:  Your {dataToShow.diabetes} have diabetes </div>
      <div>Activity:  {dataToShow.activity} </div>
      <div>Have Diabetes:  {dataToShow.havediabetes} </div>
      <div>Pregnent:  {dataToShow.pregnent} </div>
    </div>
  );
};

export default ShowData;
