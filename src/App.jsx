import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StoreData from "./components/StoreData";
function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      placeholder: " Enter Your Name",
      buttonName: "Next",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      placeholder: " Enter Email",
      buttonName: "Next",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      placeholder: " Enter DOB",
      buttonName: "Next",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      placeholder: " ",
      buttonName: "Submit",
    },
  ];
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formsData, setFormsData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmite = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("data was submitted");
      setIsSubmitted(true);
    } else {
      setIndex(index + 1);
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    setIndex(index - 1);
  };
  const handleInput = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyData = { ...formsData };
    copyData[id] = val;
    setFormsData(copyData);
  };

  return (
    <>
      {!isSubmitted ? (
        <Form
          forms={forms}
          formsData={formsData}
          index={index}
          handleSubmite={handleSubmite}
          handleBack={handleBack}
          handleInput={handleInput}
        ></Form>
      ) : (
        <StoreData formsData={formsData}></StoreData>
      )}
    </>
  );
}

export default App;
