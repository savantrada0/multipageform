import React from "react";
import { Input,Steps,Form,Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const ContactInfo = ({step,items,nextStep}) => {
  return (
    <Form>

    <div className="form_container">
    <Steps current={step} items={items} />
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
    </div>
    <div className="navigation_buttons">
      <Button type="primary" onClick={nextStep}>
        Next step
      </Button>
  </div>
    </Form>


    
  );
};

export default ContactInfo;
