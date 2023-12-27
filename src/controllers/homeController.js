import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  res.render("crud.ejs");
};

let postCrud = async (req, res) => {
  let mess = await CRUDservice.createNewUser(req.body);
  console.log(mess);
  res.send("hihihehe");
};

let displayCRUD = async (req, res) => {
  const data = await CRUDservice.getAllUser();
  return res.render("displayCRUD", {
    data: data,
  });
};

let editCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userInfo = await CRUDservice.getUserInfo(userId);
    console.log("user info from homeController.js\n", userInfo);
    return res.send("found an user");
  }
  return res.send("found no user");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCrud: postCrud,
  displayCRUD: displayCRUD,
  editCrud: editCrud,
};
