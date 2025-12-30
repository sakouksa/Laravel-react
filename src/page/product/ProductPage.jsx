import React from "react";
import { productStore } from "../../store/ProductStore";
import { Button, Space, Row, Col } from "antd";

function ProductPage() {
  // Destructure all the actions you need from the store
  const { list } = productStore();
  return (
    <div style={{ padding: "20px" }}>
      <div>ProductPage</div>
      <Row>
        {list?.map((item, index) => (
          <Col key={index} xs={24} md={8} lg={6}>
            <div style={{ backgroundColor: "#eee", padding: 10, margin: 5 }}>
              {/* <div style={{ width: "100%", height: 210, backgroundColor: "gray" }}>
              </div> */}
              <img src={item.image} alt={item.name} style={{ width: "100%", height: 210 }} />
              <div style={{fontWeight:"bold"}}>{item.name}</div>
              <div>{item.des}</div>
              <div>Price: ${item.price}</div>
              <Button type="primary">Add to Cart</Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductPage;
