import bcrypt, { hash } from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, rejects) => {
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
      rejects(e);
    }
  });
};

const hasPassword = (password) => {
  return new Promise(async (resolve, rejects) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      rejects(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};
