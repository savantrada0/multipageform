import React from "react";
import { Form, Button,Table } from "antd";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slice/employeeSlice";
import dayjs from "dayjs";
import "./style.css"

const Confirm = ({ nextStep, prevStep,values }) => {
  const dispatch = useDispatch();
  console.log(values);
  const onFinish = () => {
    const dateofbirth = dayjs(values.dob).format("YYYY-MM-DD");
    const salary = values.salary+"/year";
    const experience = values.experience+" year";
    const data = {
      name: values.name,
    email: values.email,
    phone: values.phone,
    company: values.company,
    dob: dateofbirth,
    technologies: values.technologies,
    gender: values.gender,
    education: values.education,
    address: values.address,
    city: values.city,
    state: values.state,
    country:values.country,
    pincode: values.pincode,
    salary: salary,
    position: values.position,
    experience: experience,
    status: values.status,
    }
    dispatch(addEmployee(data))
    nextStep();
  };



  const columns = [
    {
      title: 'Feild',
      dataIndex: 'feild',
      key: 'feild',
    },
    {
      title: 'value',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  const data = [
    {
      key: '1',
      feild: 'Name',
      value: values.name,
    },
    {
      key: '2',
      feild: 'Email',
      value: values.email,
    },
    {
      key: '3',
      feild: 'phone number',
      value: values.phone,
    },
    {
      key: '4',
      feild: 'Company',
      value: values.company,
    },
    {
      key: '5',
      feild: 'DateofBirth',
      value: dayjs(values.dob).format("YYYY-MM-DD"),
    },
    {
      key: '6',
      feild: 'Technologies',
      value: values.technologies.join(", "),
    },
    {
      key: '7',
      feild: 'Gender',
      value: values.gender,
    },
    {
      key: '8',
      feild: 'Address',
      value: values.address,
    },
    {
      key: '9',
      feild: 'City',
      value: values.city,
    },
    {
      key: '10',
      feild: 'State',
      value: values.state,
    },
    {
      key: '11',
      feild: 'Country',
      value: values.country,
    },
    {
      key: '12',
      feild: 'Pincode',
      value: values.pincode,
    },
    {
      key: '13',
      feild: 'Experience',
      value: values.experience+" year"
    },
    {
      key: '14',
      feild: 'Position',
      value: values.position,
    },
    {
      key: '15',
      feild: 'Salary',
      value:  values.salary+"/year"
    },
    {
      key: '16',
      feild: 'Status',
      value: values.status,
    },
    {
      key: '17',
      feild: 'Education',
      value: values.education,
    },
  ];
  
  return (
    <Form
    autoComplete="off"
    layout="vertical"
    onFinish={onFinish}
  >
      <div className="confirm_container">
      <Table columns={columns} dataSource={data} />
      </div>
      <div className="navigation_buttons">
        <Button type="primary" htmlType="submit">
          Confirm & Submit
        </Button>
        <Button type="primary" onClick={prevStep}>
          Edit
        </Button>
      </div>
    </Form>
  );
};

export default Confirm;
