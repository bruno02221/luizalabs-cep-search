const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
app.set("port", PORT);

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const webpackConfig = require("../webpack/config.dev");
  const webpackCompiler = require("webpack")(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      logLevel: "silent"
    })
  );

  app.use(require("webpack-hot-middleware")(webpackCompiler));
}

/* Routings */
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.listen(app.get("port"), () => {
  if (isProduction) {
    console.log("Server is running");
  } else {
    console.log("\n---------------------------------------");
    console.log("Luizalabs Address Search Application");
    console.log(`\nDevelopment server is running`);
    console.log(`\nAccess it at http://127.0.0.1:${app.get("port")}`);
    console.log("---------------------------------------\n");
  }
});
