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
  console.log("----------------------------");
  console.log(data);
  console.log("----------------------------");

  return res.send("Display from displayCRUD");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCrud: postCrud,
  displayCRUD: displayCRUD,
};
