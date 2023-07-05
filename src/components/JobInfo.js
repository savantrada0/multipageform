import React from "react";
import { Input, Select, Button, Steps, Form } from "antd";

const { Option } = Select;
const JobInfo = ({ prevStep, step, items, nextStep }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const selectAfter = (
    <Select defaultValue="Year">
      <Option value="Year">Year</Option>
      <Option value="Month">Month</Option>
    </Select>
  );

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      hideRequiredMark
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
        <div className="jobinfo_container">
          <div className="row">
            <Form.Item
              name="experience"
              label="Experience you have"
              rules={[
                {
                  required: true,
                  message: "Enter experience level",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input placeholder="1" addonAfter={selectAfter} />
            </Form.Item>
            <Form.Item
              name="salary"
              label="Your current salary"
              rules={[
                {
                  required: true,
                  message: "Provide your current salary",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input placeholder="500000" addonAfter="₹/year" />
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item
              name="position"
              label="Job Position"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter your job position" />
            </Form.Item>
            <Form.Item
              name="status"
              label="Employment type"
              rules={[
                {
                  required: true,
                  message: "Select your employment type",
                },
              ]}
              hasFeedback
            >
              <Select
                placeholder="Status"
                options={[
                  {
                    value: "Full-Time",
                    label: "Full-Time",
                  },
                  {
                    value: "Part-Time",
                    label: "Part-Time",
                  },
                  {
                    value: "Internship",
                    label: "Internship",
                  },
                ]}
              />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="navigation_buttons">
        <Button type="primary" htmlType="submit">
          Next step
        </Button>
        <Button type="primary" onClick={prevStep}>
          Previous step
        </Button>
      </div>
    </Form>
  );
};

export default JobInfo;
