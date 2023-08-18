import React from "react";

import { Route } from "./Route";
import { Router } from "./Router";
import Product from "./pages/product";
import Products from "./pages/products";

export const App = ({ initialPath }: { initialPath: string }) => {
  return (
    <Router initialPath={initialPath}>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </Router>
  );
};
