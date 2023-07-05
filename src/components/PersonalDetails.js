import React, { useState } from "react";
import "./style.css";
import { DatePicker, Button, Select, Steps, Radio, Checkbox, Form } from "antd";

const PersonalDetails = ({ prevStep, step, items, nextStep }) => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
  };
  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];

  const options1 = [
    {
      label: "React",
      value: "React",
    },
    {
      label: "Node",
      value: "Node",
    },
    {
      label: "Express",
      value: "Express",
    },
    {
      label: "Mongodb",
      value: "Mongodb",
    },
  ];

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      onFinish={(values) => {
        console.log(values);
        nextStep();
      }}
      onFinishFailed={(error) => {
        console.log({ error });
      }}
    >
      <div className="form_container">
        <Steps current={step} items={items} />
        <div className="personaldetails_container">
          <div className="row">
            <Form.Item
              name="dob"
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Provide your date of birth",
                },
              ]}
              hasFeedback
            >
              <DatePicker picker="date" placeholder="Choose BirthDate" />
            </Form.Item>
            <Form.Item
              name="education"
              label="Select your highest education"
              rules={[
                {
                  required: true,
                  message: "Select your highest education",
                },
              ]}
              hasFeedback
            >
              <Select
                placeholder="Select one"
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "M.Tech",
                    label: "M.Tech",
                  },
                  {
                    value: "B.Tech",
                    label: "B.Tech",
                  },
                  {
                    value: "MCA",
                    label: "MCA",
                  },
                  {
                    value: "BCA",
                    label: "BCA",
                  },
                ]}
              ></Select>
            </Form.Item>
          </div>
          <Form.Item
            name="gender"
            label="Select your Gender"
            rules={[
              {
                required: true,
                message: "Please select your gender",
              },
            ]}
            className="radio_button"
            hasFeedback
          >
            <Radio.Group options={options} />
          </Form.Item>
          <Form.Item
            name="technologies"
            label="Select your technologies"
            rules={[
              {
                required: true,
                message: "Please select atleast one technology",
              },
            ]}
            className="radio_button"
            hasFeedback
          >
            <Checkbox.Group options={options1} />
          </Form.Item>
        </div>
      </div>
      <div className="navigation_buttons">
        <Button type="primary" htmlType="sumbit">
          Next step
        </Button>
        <Button type="primary" onClick={prevStep}>
          Previous step
        </Button>
      </div>
    </Form>
  );
};

export default PersonalDetails;
