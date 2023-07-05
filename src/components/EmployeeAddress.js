import React from "react";
import { Input, Button,Steps,Form  } from "antd";
const { TextArea } = Input;

const EmployeeAddress = ({prevStep,step,items,nextStep}) => {
  return (
    <Form>
    <div className="form_container">
    <Steps current={step} items={items} />
    <div className="address_container">
      <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
    </div>
    </div>
    <div className="navigation_buttons">
    <Button type="primary" onClick={nextStep}>
        Submit
      </Button>
        <Button type="primary" onClick={prevStep}>
        Previous step
        </Button>
        </div>
        </Form>
  );
};

export default EmployeeAddress;
