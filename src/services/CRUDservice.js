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

//tim user theo id
const getUserInfo = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userInfo = await db.User.findByPk(userId, { raw: true });
      resolve(userInfo);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserInfo: getUserInfo,
};
