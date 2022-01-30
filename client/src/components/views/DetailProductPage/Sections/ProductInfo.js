import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Category">
          {Product.category}
        </Descriptions.Item>
        <Descriptions.Item label="Name">{Product.title}</Descriptions.Item>
        <Descriptions.Item label="Website Link">
          {" "}
          <a href={Product.url}>click</a>
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {Product.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick>
          Donate Now
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
