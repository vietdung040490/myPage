import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/getCRUD", homeController.getCRUD);
  router.post("/post-crud", homeController.postCrud);
  router.get("/displayCRUD", homeController.displayCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
