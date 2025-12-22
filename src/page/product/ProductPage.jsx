import React from "react";
import { countStore } from "../../store/counStore";
import { Button, Space } from "antd";

function ProductPage() {
  // Destructure all the actions you need from the store
  const { count, increase, decrease, reset, update } = countStore();

  return (
    <div style={{ padding: "20px" }}>
      <div>ProductPage</div>
      <h1>Count : {count}</h1>

      <Space>
        {/* Call the functions directly or use an arrow function that calls them */}
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>

        {/* Adding the Reset functionality */}
        <Button onClick={reset} danger>
          Reset
        </Button>

        {/* Adding the Update functionality with a specific value */}
        <Button onClick={() => update(888)}>Update to (888)</Button>
      </Space>
    </div>
  );
}

export default ProductPage;
