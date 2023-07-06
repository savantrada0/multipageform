import React, { useState } from "react";
import { Input, Steps, Form, Button, Spin } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const ContactInfo = ({ values, step, items, nextStep, setValues }) => {
  const [loading, setLoading] = useState(false);
  //  const [form] = Form.useForm();
  const onFinish = (valuesform) => {
    //api call
    //form.resetFields();
    // form.setFieldValue({
    //   name:""
    // })
    nextStep();
    console.log(values);
  };
  const onFinishFailed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // form.setFieldValue({
    //   name: value,
    // });
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  console.log(values);
  return (
    <Spin spinning={loading}>
      <Form
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          name: values.name,
          phone: values.phone,
          email: values.email,
          company: values.company,
        }}
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
                hasFeedback
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
                hasFeedback
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
                hasFeedback
              >
                <Input
                  placeholder="Enter your contact"
                  suffix={<UserOutlined />}
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
                hasFeedback
              >
                <Input
                  placeholder="Company name"
                  suffix={<UserOutlined />}
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
    </Spin>
  );
};

export default ContactInfo;
