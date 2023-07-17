import React from "react";

// to create backend express app
import express from "express";

/**
 * Render a React element to its initial HTML. This should only be used on the server.
 * React will return an HTML string. You can use this method to generate HTML on the server
 * and send the markup down on the initial request for faster page loads and to allow search
 * engines to crawl your pages for SEO purposes.
 *
 * If you call `ReactDOMClient.hydrateRoot()` on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you
 * to have a very performant first-load experience.
 */
// export function renderToString(element: ReactElement): string;
import { renderToString } from "react-dom/server";

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
    const html = renderToString(<Component {...props} />);

    res.send(`
     <!DOCTYPE html>
     <html>
          <head>
          <title>React SSR</title>
          </head>
          <body>
          <div id="root">${html}</div>
          </body>
     </html>
     `);
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
