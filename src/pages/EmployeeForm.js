import React, { useState } from "react";
import { Button, Input } from "antd";
import ContactInfo from "../components/ContactInfo";
import Confirm from "../components/Confirm";
import Success from "../components/Success";
import EmployeeAddress from "../components/EmployeeAddress";
import JobInfo from "../components/JobInfo";
import PersonalDetails from "../components/PersonalDetails";

const EmployeeForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    dob: "",
    maritalstatus: "",
    gender: "",
    education: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    salary: "",
    position: "",
    department: "",
    experience: "",
    emptype: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="content">
        <h1 className="heading">Get an Employee Information</h1>
        <p>
          Please fill the form below to receive an interview details and other
          information that is regarding the task
        </p>
        <div className="form_container">
          <div className="progress_bar"></div>
          {step === 1 && (
            <ContactInfo values={values} handleChange={handleChange} />
          )}
          {step === 2 && (
            <PersonalDetails values={values} handleChange={handleChange} />
          )}
          {step === 3 && (
            <JobInfo values={values} handleChange={handleChange} />
          )}
          {step === 4 && (
            <EmployeeAddress values={values} handleChange={handleChange} />
          )}
          {step === 5 && (
            <Confirm values={values} handleChange={handleChange} />
          )}
          {step === 6 && <Success />}
        </div>
        <div className="navigation_buttons">
          {step !== (5 || 6) && (
            <Button type="primary" onClick={nextStep}>
              Next step
            </Button>
          )}
          {step === 5 && (
            <Button type="primary" onClick={nextStep}>
              Confirm & Submit
            </Button>
          )}
          {step !== (1 || 6) && (
            <Button type="primary" onClick={prevStep}>
              Previous step
            </Button>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="logo_wrapper">
          <span>Aimbrill Techinfo</span>
          <p>Copyright © 2021 Aimbrill Techinfo | All Rights Reserved</p>
        </div>
        <div className="newsletter_input">
          <Input defaultValue="Combine input and button" />
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
