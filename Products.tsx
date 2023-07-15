import React from "react";
import { Link } from "./Link";

export const Products = () => {
  const [products, setProducts] = React.useState<any>([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ margin: "6rem" }}>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Link to={`/product?id=${product.id}`}>
            <div
              style={{
                background: "white",
                padding: "1rem",
                border: "2px grey solid",
                borderRadius: "15px",
                marginBottom: "5px",
              }}
              key={product.id}>
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
