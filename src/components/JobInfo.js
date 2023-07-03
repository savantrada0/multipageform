import React from "react";
import { Input, Select, Space } from "antd";

const JobInfo = () => {
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
  );
};

export default JobInfo;
