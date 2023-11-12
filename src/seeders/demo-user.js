"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@admin.com",
        password: "123qwe",
        firstName: "admin",
        lastName: "vn",
        address: "VN",
        gender: true,
        roleId: "R1",
        phoneNumber: "0973733307",
        positionId: "",
        image: "",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

// email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       address: DataTypes.STRING,
//       gender: DataTypes.BOOLEAN,
//       typeRole: DataTypes.STRING,
//       keyRole: DataTypes.STRING,
