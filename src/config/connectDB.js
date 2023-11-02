const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("VietDung", "root", "7687", {
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
