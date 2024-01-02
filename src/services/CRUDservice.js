import bcrypt, { hash } from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

//tao user
const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hasPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        image: null,
        positionId: null,
      });
      resolve("create new user ok");
    } catch (e) {
      reject(e);
    }
  });
};

//hash password
const hasPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

//tim tat ca user
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let arrayUsers = await db.User.findAll({
        raw: true,
      });
      resolve(arrayUsers);
    } catch (e) {
      reject(e);
    }
  });
};

//lay thong tin user sau khi ban nut edit (tim user theo id)
const getDataToEditUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findByPk(userId, { raw: true });
      resolve(data);
      // console.log("user info from CRUDservices/getDataToEditUser:");
      // console.log(data);
    } catch (e) {
      reject(e);
    }
  });
};

//xử lý lưu dữ liệu mới dau khi đã update, vào database
const updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findByPk(data.id);

      user.set({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
      });
      await user.save();
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

//thuc hien delete user
let deleteUser = (userId) => {
  // console.log("userId from CRUDservices.js/deleteUser: ", userId);
  return new Promise(async (resolve, reject) => {
    try {
      let userInfo = await db.User.findByPk(userId);
      await userInfo.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getDataToEditUser: getDataToEditUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
