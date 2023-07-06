import React from "react";
import { Input, Steps, Form, Button } from "antd";
import { UserOutlined, MailOutlined ,MobileOutlined,HomeOutlined} from "@ant-design/icons";
import "./style.css"

const ContactInfo = ({ values, step, items, nextStep, setValues }) => {
  const onFinish = (valuesform) => {
    nextStep();
    console.log(values);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
      <Form
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: values.name,
          phone: values.phone,
          email: values.email,
          company: values.company,
        }}
        hideRequiredMark
      >
        <div className="form_container">
          <Steps current={step} items={items} />
          <div className="contactinfo_container">
            <div className="row">
              <Form.Item
                name={"name"}
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                  { whitespace: true },
                  { min: 3 },
                ]}
              >
                <Input
                  placeholder="Enter your name"
                  suffix={<UserOutlined />}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name={"email"}
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Enter mail address"
                  suffix={<MailOutlined />}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <div className="row">
              <Form.Item
                name={"phone"}
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your number",
                  },
                  { min: 10 },
                ]}
              >
                <Input
                  placeholder="Enter your contact"
                  suffix={<MobileOutlined />}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name={"company"}
                label="Company"
                rules={[
                  {
                    required: true,
                    message: "Please enter your company name",
                  },
                  { whitespace: true },
                  { min: 3 },
                ]}
              >
                <Input
                  placeholder="Company name"
                  suffix={<HomeOutlined />}
                  onChange={handleChange}
                />
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
