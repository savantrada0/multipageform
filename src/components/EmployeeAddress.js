import React from "react";
import { Input, Button, Steps, Form } from "antd";
import "./style.css";
const { TextArea } = Input;

const EmployeeAddress = ({
  prevStep,
  step,
  items,
  nextStep,
  values,
  setValues,
}) => {
  const onFinish = (valuesform) => {
    nextStep();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        address: values.address,
        city: values.city,
        state: values.state,
        country: values.country,
        pincode: values.pincode,
      }}
    >
      <div className="form_container">
        <Steps current={step} items={items} />
        <div className="address_container">
          <Form.Item
            name={"address"}
            label="Enter your address"
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
              { whitespace: true },
              { min: 10 },
            ]}
            onChange={handleChange}
          >
            <TextArea
              placeholder="Enter your address"
              autoSize={{
                minRows: 2,
                maxRows: 2,
              }}
            />
          </Form.Item>
          <div className="row">
            <Form.Item
              name={"city"}
              label="Enter your city"
              requiredMark="optional"
              onChange={handleChange}
            >
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item
              name={"state"}
              label="Enter your state"
              rules={[
                {
                  required: true,
                  message: "Please enter state name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              onChange={handleChange}
            >
              <Input placeholder="State" />
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item
              name={"country"}
              label="Enter your country"
              rules={[
                {
                  required: true,
                  message: "Please enter country name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              onChange={handleChange}
            >
              <Input placeholder="Country" />
            </Form.Item>
            <Form.Item
              name={"pincode"}
              label="Enter your pincode"
              rules={[
                {
                  required: true,
                  message: "provide pincode number",
                },
                { whitespace: true },
                { min: 6 },
              ]}
              onChange={handleChange}
            >
              <Input type="number" placeholder="Pincode" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="navigation_buttons">
        <Button type="primary" htmlType="submit">
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
