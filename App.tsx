import React from "react";

import { Product } from "./Product";
import { Products } from "./Products";
import { Route } from "./Route";
import { Router } from "./Router";

export const App = () => {
  return (
    <Router>
      <Route path="/">
        <Products />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </Router>
  );
};
