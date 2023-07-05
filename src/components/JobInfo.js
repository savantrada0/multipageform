import React from "react";
import { Input, Select,Button,Steps,Form, Space } from "antd";

const JobInfo = ({prevStep,step,items,nextStep}) => {
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form>
    <div className="form_container">
    <Steps current={step} items={items} />
    <div className="jobinfo_container">
      <Space.Compact>
        <Input defaultValue="Xihu District, Hangzhou" />
        <Select defaultValue="Zhejiang" options={options} />
      </Space.Compact>
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Space.Compact>
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
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
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
      </Space.Compact>
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

export default JobInfo;
