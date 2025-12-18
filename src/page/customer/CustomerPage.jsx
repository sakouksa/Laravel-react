import { Button } from "antd";
import React from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function CustomerPage() {
  return (
    <div>
      <MdDelete style={{ fontSize: 33, color: "red" }} />
      <Button shape="round">
        <MdDelete style={{ fontSize: 16, color: "red" }} /> Save
      </Button>
      <Button shape="round">
        <CiEdit style={{ fontSize: 16, color: "red" }} /> Edit
      </Button>
      <Button shape="round">
        <MdEditCalendar onClick={() => alert("Click Me")} style={{ fontSize: 16, color: "red" }} /> Edit
      </Button>
      <h1>CustomerPage</h1>
    </div>
  );
}

export default CustomerPage;
