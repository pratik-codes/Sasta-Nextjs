import React from "react";
import { Link } from "../Link";

const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const Products = ({ initialData = [] }) => {
  const [products, setProducts] = React.useState<any>(initialData);

  return (
    <div style={{ margin: "6rem" }}>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Link key={product.id} to={`/product?id=${product.id}`}>
            <div
              style={{
                background: "white",
                padding: "1rem",
                border: "2px grey solid",
                borderRadius: "15px",
                marginBottom: "5px",
              }}>
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

// exporting this function to fetch props on server side
export const getProps = async () => {
  const data = await getData();
  return {
    initialData: data,
  };
};
