import React, { useState } from "react";
import { DatePicker,Button, Select,Steps, Radio, Checkbox, Form } from "antd";

const PersonalDetails = ({prevStep,step,items,nextStep}) => {
  const [value1, setValue1] = useState("Apple");
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];

  const options1 = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Form>
<div className="form_container">
<Steps current={step} items={items} />
    <div className="personaldetails_container">
      <DatePicker onChange={onChange} />
      <Radio.Group options={options} onChange={onChange1} value={value1} />
      <Checkbox.Group
        options={options1}
        defaultValue={["Pear"]}
        onChange={onDateChange}
        />
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
        />
    </div>
      </div>
    <div className="navigation_buttons">
    <Button type="primary" onClick={nextStep}>
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
