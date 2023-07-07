import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../redux/slice/employeeSlice";
import "./style.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 6,
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    sorter: {
      compare: (a, b) => a.position - b.position,
      multiple: 5,
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
      multiple: 4,
    },
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    sorter: {
      compare: (a, b) => a.country - b.country,
      multiple: 3,
    },
  },
  {
    title: "Experience",
    dataIndex: "experience",
    key: "experience",
    sorter: {
      compare: (a, b) => a.experience - b.experience,
      multiple: 2,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: {
      compare: (a, b) => a.status - b.status,
      moltiple: 1,
    },
  },
];

const EmployeeData = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  const dispatch = useDispatch();

  const response = useSelector((state) => state.employees);

  const data = response.employees;
  const loading = response.loading;

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{
        showSizeChanger: true,
        pageSize: pageSize,
        total: data.length,
        current: page,
        onChange: (page, pageSize) => {
          setPageSize(pageSize);
          setPage(page);
        },
      }}
      className="data_table"
      rowKey={(obj) => obj._id}
      scroll={{ x: 200 }}
    />
  );
};

export default EmployeeData;
