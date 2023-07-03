import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const EmployeeAddress = () => {
  return (
    <div className="address_container">
      <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
    </div>
  );
};

export default EmployeeAddress;
