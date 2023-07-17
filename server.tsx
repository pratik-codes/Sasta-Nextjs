import React from "react";

// to create backend express app
import express from "express";

import { renderToPipeableStream } from "react-dom/server";

// react component that will be sent as html from the expres app as a response.
import { readdirSync } from "fs";
import { join } from "path";

const app = express();

// serving static files from dist folder
app.use(express.static("dist"));

// getting all the pages from pages folder and storing them in an array with thier names to pass as routes
const pages = readdirSync(join(process.cwd(), "pages")).map(
  (p) => p.split(".")[0]
);

// handling all the routes for page
pages.forEach((page) => {
  // creating a route for each page
  app.get(`/${page}`, async (req, res) => {
    // importing the page component and fetching and passing props if exported from the component
    const module = await import(`./pages/${page}`);
    const Component = module.default;
    const props = module.getProps
      ? await module.getProps({ query: req.query })
      : {};
    const html = <Component {...props} />;
    const { pipe } = renderToPipeableStream(html);
    pipe(res);
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
