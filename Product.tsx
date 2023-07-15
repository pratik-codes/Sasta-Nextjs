import React, { useEffect } from "react";
import { Link } from "./Link";

export const Product = () => {
  const [data, setData] = React.useState<any>("");
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    // Get breed from query string and fetch image
    const params = new URLSearchParams(window.location.search);
    const product_id = params.get("id");

    if (product_id) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${product_id}/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: "6rem" }}>
      <Link to="/">
        <div
          style={{
            padding: "1rem",
            border: "1px grey solid",
            width: "4rem",
            borderRadius: "15px",
            textAlign: "center",
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
