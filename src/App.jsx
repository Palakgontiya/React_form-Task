import { useEffect, useState } from "react";
import ActivityLevel from "./assets/ActivityLevel";
import Diabetes from "./assets/Diabetes";
import FamilyHistory from "./assets/Familyhistory";
import Gender from "./assets/Gender";
import Heading from "./assets/Heading";
import HeightWeight from "./assets/HeightWeight";
import Navbar from "./assets/Navbar";
import Prenent from "./assets/Pregnent";
import SubmitButton from "./assets/SubmitButton";

function App() {
  const [formdata, setFormdata] = useState({});

  const handleFormdataUpdate = (data) => {
    setFormdata((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);
  return (
    <>
      <Navbar />
      <Heading />
      <Gender onGenderUpdate={handleFormdataUpdate} />
      <HeightWeight onHeightWeightUpdate = {handleFormdataUpdate} />
      <FamilyHistory onFamilyhistoryupdate = {handleFormdataUpdate} />
      <ActivityLevel onActivityUpdate = {handleFormdataUpdate} />
      <Diabetes onDiabetesUpdate = {handleFormdataUpdate} />
      <Prenent onbabyUpdate = {handleFormdataUpdate} />
      <SubmitButton data = {formdata} />
    </>
  );
}

export default App;
