import React, { useState } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import { CgInsertBeforeO } from "react-icons/cg";
import Item from "antd/es/list/Item";
function RolePage() {
  //     const[count,setCount] = useState(0);
  //   const [list, setList] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [total, setTotal] = useState(0);

  const [state, setState] = useState({
    list: [
      { id: 1, name: "Super Admin", group: "admin", status: "active" },
      { id: 2, name: "SEO", group: "Admin", status: "inactive" },
      { id: 3, name: "Development", group: "IT", status: "inactive" },
      { id: 4, name: "IT Manager", group: "IT", status: "inactive" },
      { id: 5, name: "IT Software", group: "IT", status: "inactive" },
      { id: 6, name: "Mobile App", group: "IT", status: "inactive" },
    ],
    loading: false,
    total: 1000,
    searchVal: "",
  });
  return (
    <div>
      <div className="main-page-header">
        <Space>
          <div>Role, Total: {state.list.length}</div>
          <Input.Search allowClear placeholder="Search" />
        </Space>
        <div>
          <Button type="primary">
            <CgInsertBeforeO />
            New
          </Button>
        </div>
      </div>
      {state.list.map((item, index) => (
        <div
          key={index}
          style={{
            padding: 10,
            backgroundColor: "#eeee",
            marginBottom: 3,
            borderRadius: 10,
          }}
        >
          <Space>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "gray",
              }}
            />
            <div>
              <div>item.name-{item.name}</div>
              <div>item.group-{item.group}</div>
              <div>item.status-{item.status}</div>
            </div>
          </Space>
          <div style={{ textAlign: "right" }}>
            <Space>
              <Button type="primary">Edit</Button>
              <Button danger type="primary">
                Delete
              </Button>
            </Space>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RolePage;
