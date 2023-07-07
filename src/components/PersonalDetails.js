import React from "react";
import "./style.css";
import { DatePicker, Button, Select, Steps, Radio, Checkbox, Form } from "antd";

const PersonalDetails = ({
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
    setValues((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
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

  const onDateChange = (date, dateString) => {
    setValues((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const onSelectChange = (value) => {
    setValues((prev) => ({
      ...prev,
      education: value,
    }));
  };

  const handleCheckbox = (checkedValues) => {
    setValues((prev) => ({
      ...prev,
      technologies: checkedValues,
    }));
  };

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        dob: values.dob ,
        education: values.education,
        gender: values.gender,
        technologies: values.technologies,
      }}
      hideRequiredMark
    >
      <div className="form_container">
        <Steps current={step} items={items} />
        <div className="personaldetails_container">
          <div className="row">
            <Form.Item
              name={"dob"}
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Provide your date of birth",
                },
              ]}
              hasFeedback
            >
              <DatePicker
                onChange={onDateChange}
                picker="date"
                placeholder="Choose BirthDate"
                inputReadOnly
                value={values.dob}
              />
            </Form.Item>
            <Form.Item
              name={"education"}
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
                onChange={onSelectChange}
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
            name={"gender"}
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
            <Radio.Group value={values.gender} onChange={handleChange} options={options} />
          </Form.Item>
          <Form.Item
            name={"technologies"}
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
            <Checkbox.Group onChange={handleCheckbox} options={options1} />
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
