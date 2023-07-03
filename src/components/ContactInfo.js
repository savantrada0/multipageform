import React from "react";
import { Input } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const ContactInfo = () => {
  return (
    <div className="contactinfo_container">
      <div className="row">
        <Input
          placeholder="Enter your name"
          aria-label="Name"
          postfix={<UserOutlined />}
        />
        <Input
          placeholder="Enter mail address"
          aria-label="Email"
          postfix={<MailOutlined />}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Enter your contact"
          aria-label="Phone number"
          postfix={<UserOutlined />}
        />
        <Input
          placeholder="Company name"
          aria-label="Company"
          postfix={<UserOutlined />}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
