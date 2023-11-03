const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("VietDung", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection is success");
  } catch {
    console.error("Connection was failed");
  }
};

module.exports = connectDB;
