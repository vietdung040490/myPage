import CRUDservice from "../services/CRUDservice";

//open Home page
let getHomePage = async (req, res) => {
  try {
    // let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      // data: JSON.stringify(data),
      title: "Home page from homeController",
    });
  } catch (e) {
    console.log(e);
  }
};

// open About page
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs", {
    title: "About Page",
  });
};

//open Add new user page
let addCrud = (req, res) => {
  res.render("addCrud.ejs", { title: "Add CRUD" });
};

//tao user moi tu trang
let postCrud = async (req, res) => {
  await CRUDservice.createNewUser(req.body);
  const data = await CRUDservice.getAllUser();
  return res.render("displayCRUD", {
    //sau khi them user thi lai render(chuyen huong sang displayCRUD) ra tat ca user
    data: data,
    title: "Display all user",
  });
};

let displayCRUD = async (req, res) => {
  const data = await CRUDservice.getAllUser();
  return res.render("displayCRUD", {
    data: data,
    title: "Display all user",
  });
};

//edit user, click button: edit ở page "displayCRUD.ejs", sau đó render sang trang "editUser.ejs"
//truyền userInfo cho trang "editUser.ejs"
let editCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userInfo = await CRUDservice.getDataToEditUser(userId);
    // console.log("user info from homeController.js > editCrud \n", userInfo);
    // return res.send("found an user: " + userInfo.firstName);
    return res.render("editUser.ejs", {
      title: "Edit User",
      userInfo: userInfo,
    });
  }
  return res.send("found no user");
};

//hành động update(click nút update) thì lấy dữ liệu từ trang web rồi đưa vào biến data
//rồi sau đó dùng hàm update Crud để ghi dữ liệu vào database
let updateCrud = async (req, res) => {
  let data = req.body;
  await CRUDservice.updateUser(data);
  const listUser = await CRUDservice.getAllUser();
  return res.render("displayCRUD", {
    data: listUser,
    title: "Display all user",
  });
};

//delete user
let deleteCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDservice.deleteUser(userId);
    const listUser = await CRUDservice.getAllUser();
    return res.render("displayCRUD", {
      data: listUser,
      title: "Display all user",
    });
  } else {
    return res.send("page 404");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  addCrud: addCrud,
  postCrud: postCrud,
  displayCRUD: displayCRUD,
  editCrud: editCrud,
  updateCrud: updateCrud,
  deleteCrud: deleteCrud,
};
