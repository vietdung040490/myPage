import express from "express";
import expressLayouts from "express-ejs-layouts";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.use(expressLayouts);
  app.set("layout", "layouts/layout1.ejs");
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
