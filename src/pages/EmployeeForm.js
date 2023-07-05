import React, { useState } from "react";
import { Button, Input } from "antd";
import ContactInfo from "../components/ContactInfo";
import Confirm from "../components/Confirm";
import Success from "../components/Success";
import EmployeeAddress from "../components/EmployeeAddress";
import JobInfo from "../components/JobInfo";
import PersonalDetails from "../components/PersonalDetails";
import "./style.css";

const EmployeeForm = () => {
  const [step, setStep] = useState(0);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const items = [{
    key: '1',
  },{
    key: '2',
  },{
    key: '3',
  },{
    key: '4',
  }];

  const steps = [
    {
      title: '1',
      content: <ContactInfo values={values} step={step} items={items} nextStep={nextStep} handleChange={handleChange} />
    },
    {
      title: '2',
      content: <PersonalDetails values={values} step={step} items={items} prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
    },
    {
      title: '3',
      content:  <JobInfo values={values} step={step} items={items} prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
    },
    {
      title: '4',
      content: <EmployeeAddress values={values} step={step} items={items} prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
    },
    {
      title: '5',
      content: <Confirm values={values} prevStep={prevStep} nextStep={nextStep} />
    },
    {
      title: '6',
      content: <Success />
    }
  ]

  return (
    <div className="form_page">
      <div className="content">
        <h1 className="heading">Get an Employee Information</h1>
        <p>
          Please fill the form below to receive an interview details and other
          information that is regarding the task
        </p>
        <div>{steps[step].content}</div>
      </div>
      <div className="footer">
        <div className="logo_wrapper">
          <h1>Aimbrill Techinfo</h1>
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
