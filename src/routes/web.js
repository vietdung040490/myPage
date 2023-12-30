import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/addCrud", homeController.addCrud);
  router.post("/post-crud", homeController.postCrud);
  router.get("/displayCRUD", homeController.displayCRUD);
  router.get("/editCrud", homeController.editCrud);
  router.post("/updateCrud", homeController.updateCrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
