import React from "react";
import { Form, Button } from "antd";

const Confirm = ({ nextStep, prevStep }) => {
  return (
    <Form>
      <div className="confirm_container"></div>
      <div className="navigation_buttons">
        <Button type="primary" onClick={nextStep}>
          Confirm & Submit
        </Button>
        <Button type="primary" onClick={prevStep}>
          Edit
        </Button>
      </div>
    </Form>
  );
};

export default Confirm;
