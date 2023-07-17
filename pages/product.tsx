import React from "react";
import { Link } from "../Link";

export const getData = async (product_id) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${product_id}/`
  );
  const data = await response.json();
  return data;
};

const Product = ({ initialData = {} }) => {
  const [data, setData] = React.useState<any>(initialData);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ margin: "6rem" }}>
      <Link to="/products">
        <div
          style={{
            padding: "1rem",
            border: "1px grey solid",
            width: "4rem",
            borderRadius: "15px",
            textAlign: "center",
            cursor: "pointer",
          }}>
          Go Back
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <img
          width={"400px"}
          height={"400px"}
          src={data.image}
          alt={data.title}
        />
      </div>
    </div>
  );
};

export default Product;

export const getProps = async ({ query }) => {
  const data = await getData(query.id);
  return {
    initialData: data,
  };
};
