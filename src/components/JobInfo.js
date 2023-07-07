import React from "react";
import { Input, Select, Button, Steps, Form } from "antd";
import "./style.css";

const JobInfo = ({ prevStep, step, items, nextStep, values, setValues }) => {
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

  const onSelectChange = (value) => {
    setValues((prev) => ({
      ...prev,
      status: value,
    }));
  };

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      initialValues={{
        experience: values.experience,
        salary: values.salary,
        position: values.position,
        status: values.status,
      }}
    >
      <div className="form_container">
        <Steps current={step} items={items} />
        <div className="jobinfo_container">
          <div className="row">
            <Form.Item
              name={"experience"}
              label="Experience you have"
              rules={[
                {
                  required: true,
                  message: "Enter experience level",
                },
                { whitespace: true },
              ]}
              onChange={handleChange}
            >
              <Input placeholder="1" type="number" addonAfter="year" />
            </Form.Item>
            <Form.Item
              name={"salary"}
              label="Your current salary"
              rules={[
                {
                  required: true,
                  message: "Provide your current salary",
                },
                { whitespace: true },
              ]}
              onChange={handleChange}
            >
              <Input placeholder="500000" type="number" addonAfter="₹/year" />
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item
              name={"position"}
              label="Job Position"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              onChange={handleChange}
            >
              <Input placeholder="Enter your job position" />
            </Form.Item>
            <Form.Item
              name={"status"}
              label="Employment type"
              rules={[
                {
                  required: true,
                  message: "Select your employment type",
                },
              ]}
            >
              <Select
                onChange={onSelectChange}
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
