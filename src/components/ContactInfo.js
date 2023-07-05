import React from "react";
import { Input, Steps, Form, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const ContactInfo = ({ values, step, items, nextStep }) => {
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
        <div className="contactinfo_container">
          <div className="row">
            <Form.Item
              name="name"
              label="Name"
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
              <Input placeholder="Enter your name" suffix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter mail address"
                suffix={<MailOutlined />}
              />
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter your number",
                },
                { min: 10 },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your contact"
                suffix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="company"
              label="Company"
              rules={[
                {
                  required: true,
                  message: "Please enter your company name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Company name" suffix={<UserOutlined />} />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="navigation_buttons">
        <Button type="primary" htmlType="sumbit">
          Next step
        </Button>
      </div>
    </Form>
  );
};

export default ContactInfo;
